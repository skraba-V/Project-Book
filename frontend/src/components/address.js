import React from 'react';
import Take from "./contact-info";

export default function Address() {
  return (
    <div className="address">
        <div className="text-center">
            <h4>Peritus Webdesign GmbH</h4>
        </div> 
        
        <Take icon="/assets/placeholder.svg" line="Anzengruberstrasse 10" line2="A-4600 Wels" />
        <Take icon="/assets/technology-1.svg" line="Tel: +43 (0)4524 /54234" line2="Fax: +43 (0)4324 /52332-42" />
        <Take icon="/assets/email.svg" line="Email: wir@peritus-webdesign.com" />
        <Take icon="/assets/clock.svg" line="Offrenungszeiten" line2="MO - DO: 08:00 - 12:00 und 13:00 - 17:00, FR: 08:00 - 13:00 Uhr" />

    </div>
  );
}
