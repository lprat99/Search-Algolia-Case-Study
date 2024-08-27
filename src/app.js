const { algoliasearch, instantsearch } = window;
const { refinementList } = instantsearch.widgets;



const searchClient = algoliasearch(
  "Q2FHM0TIB8",
  "081e57887b64cbe7527f5fd2b4ea1a09",
);

const search = instantsearch({
  indexName: "CustomerEvidence",
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});




search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
  }),

  instantsearch.widgets.stats({
    container: "#stats"
  }),

  instantsearch.widgets.refinementList({
    container: '#refinement-list-partners',
    attribute: 'Partners/Integrations',
  }),

  instantsearch.widgets.refinementList({
    container: '#refinement-list-competitors',
    attribute: 'Competitor Takeout',
  }),

  instantsearch.widgets.refinementList({
    container: '#refinement-list-country',
    attribute: 'Country',
  }),

  instantsearch.widgets.refinementList({
    container: '#refinement-list-use-case',
      attribute: 'Customer Type/Persona',
  }),
  
  instantsearch.widgets.hits({
    container: "#hits_case_studies",
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <div>
      
           <p> <h1 class="title">${components.Highlight({ hit,    attribute: "Customer" })}</h1>
             
            <p><a>${components.Highlight({ hit, attribute: "Description" })}</a></p>
                                                                               </p>
            <a href=${hit.Link}>
              ${components.Highlight({
                hit, attribute: "Story Link",})}
            </a>
            <p> <b>Use-case: </b>
              ${components.Highlight({
                hit, attribute: "Customer Type/Persona",})}
            </p>

            <p> <b>Country: </b>
              ${components.Highlight({
                hit, attribute: "Country",})}
            </p>
            
            <p> 
              
            </p>
            <a>${components.Highlight({ hit, attribute: "Partners/Integrations" })}</a>

          </div>
        </article>
      `,
    },
  }),




  
  instantsearch.widgets
  .index({ indexName: 'Blog' })
  .addWidgets([
    instantsearch.widgets.hits({
      container: '#hits_blog_articles',
      templates: {
        item: (hit, { html, components }) => 
          html`<article>
            <div>
            <h1>${components.Highlight({ hit, attribute: 'title'})} </h1>
          
            <p>${components.Highlight({ hit, attribute: 'description'})}</p>
            </div></article>`,
      },
    }),
  ]),


  
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: "#pagination",
  }),

 
]);

search.start();
