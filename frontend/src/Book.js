import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './App.scss';
import Cover from './components/cover';
import Loading from './components/loading';
import ModalLoading from './components/mloading';
import Modal from 'react-bootstrap/Modal';

function Book() {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [header, setHeader] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const booksPerPage = 20;
	const [showModal, setShowModal] = useState(false);
	const [selectedBook, setSelectedBook] = useState(null);
	const [selectedBookInfo, setSelectedBookInfo] = useState(null);
	const [searchSubmitted, setSearchSubmitted] = useState(false);
	const pageNumbers = [];

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleChangeAuthor = (e) => {
		setAuthor(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setSearchSubmitted(true);
	};

	const handleShowModal = (book) => {
		setSelectedBook(book);
		setShowModal(true);
		fetchBookInfo(book.key);
	};

	const fetchBookInfo = (bookId) => {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:8000/book.php',
			data: { id: bookId },
			success: (response) => {
				setSelectedBookInfo(response);
			},
			error: (error) => {
				console.error('Error fetching book info:', error);
			},
		});
	};

	const handleCloseModal = () => {
		setSelectedBook(null);
		setSelectedBookInfo(null);
		setShowModal(false);
	};

	useEffect(() => {
		if (submitted) {
			setLoading(true);
			setHeader(author + ' ' + title);
			const fetchData = () => {
				$.ajax({
					type: 'POST',
					url: 'http://localhost:8000/server.php',
					data: {
						title: title,
						author: author,
					},
					success: (data) => {
						setResults(data.docs);
					},
					error: (error) => {
						console.error('Error fetching data:', error);
					},
					complete: () => {
						setLoading(false);
					},
				});
			};
			fetchData();
			setSubmitted(false);
		}
	}, [title, author, submitted, selectedBook]);

	// Pagination
	const indexOfLastBook = currentPage * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;
	const currentBooks = results.slice(indexOfFirstBook, indexOfLastBook);

	for (let i = 1; i <= Math.ceil(results.length / booksPerPage); i++) {
		pageNumbers.push(i);
	}

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="book">
			<div className="d-flex justify-content-center mt-5">
				<form
					action="http://localhost:8000/server.php"
					method="post"
					className="titles"
					onSubmit={handleSubmit}
				>
					<div className="form-group">
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							id="title"
							name="title"
							value={title}
							onChange={handleChange}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="author">Author:</label>
						<input
							type="text"
							id="author"
							name="author"
							value={author}
							onChange={handleChangeAuthor}
							className="form-control"
						/>
					</div>
					<button type="submit" className="btn btn-primary mt-2">
						Submit
					</button>
				</form>
			</div>
			<div>
				{loading ? (
					<Loading />
				) : (
					results?.length > 0 ? (
						<div>
							{header && (
								<h2 className="my-5 border-bottom border-bottom-1 container">
									{header}
								</h2>
							)}
							<div className="container">
								<div className="grid-container">
									{currentBooks.map((result) => (
										<div key={result.key}>
											<Cover
												cover_i={result.cover_i}
												title={result.title}
												book={result}
												handleShowModal={handleShowModal}
											/>
										</div>
									))}
								</div>
							</div>
							<div className="pagination d-flex justify-content-center m-5">
								<button
									onClick={() => paginate(currentPage - 1)}
									disabled={currentPage === 1}
									className="bt"
								>
									Previous
								</button>
								<div className="d-flex">
									{pageNumbers.map((number) => (
										<div
											key={number}
											className={`${currentPage === number ? "now" : ""
												} tesr`}
											onClick={() => paginate(number)}
										>
											{number}
										</div>
									))}
								</div>
								<button
									onClick={() => paginate(currentPage + 1)}
									disabled={indexOfLastBook >= results.length}
									className="bt"
								>
									Next
								</button>
							</div>
							<Modal show={showModal} onHide={handleCloseModal}>
								<Modal.Header closeButton></Modal.Header>
								<Modal.Body>
									{selectedBookInfo ? (
										<div className="text-center">
											<h2>{selectedBookInfo.title}</h2>
											{/*
											API which returns one single/specific book info doesn't return author name
											Instead it only returns authors array with author keys which should be used for another API call (to endpoint /authors)
											Because of that, for displaying author is used data from firs API call which returns search results
											*/}
											<p>by {selectedBook?.author_name}</p>
											{selectedBookInfo.covers && selectedBookInfo.covers.length > 0 ? (
												<img
													src={`https://covers.openlibrary.org/b/id/${selectedBookInfo.covers[0]}-L.jpg`}
													alt={selectedBookInfo.title}
													className="slikaknige"
												/>
											) : (
												<img
													src="./assets/def.jpg"
													alt={selectedBookInfo.title}
													className="slikaknige"
												/>
											)}
										</div>
									) : (
										<ModalLoading />
									)}
								</Modal.Body>
							</Modal>
						</div>
					) : searchSubmitted && results?.length === 0 && (
						<h2 className='text-center'>No results</h2>
					)
				)}

			</div>
		</div>
	);
}

export default Book;