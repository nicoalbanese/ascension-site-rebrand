# Ascension VC - Website
[live website](https://ascension.vc)

This is a Next.js app that pulls data from our [portfolio management system](https://www.youtube.com/watch?v=Is60Iji0tZw) on [Airtable](https://www.airtable.com/). As a high volume investor (50+ new deals a year), our website was constantly out-of-date. It was a huge chore to add new companies to the website every week (logo, description, founder names, linkedin profiles etc.). We moved our operational infrastructure to Airtable and that allowed us to access it via an automatically generated API (thanks Airtable 😊).


This site leverages incremental static regeneration to not only stay up-to-date but deliver super fast page responses. Now, as soon as our ops team uploads the relevant data to our internal system, it gets pushed to the site, without having to redeploy anything.