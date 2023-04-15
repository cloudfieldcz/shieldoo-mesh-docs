# Documentation for Shieldoo Secure Network

To see the contents of the docs, please navigeate to [https://docs.shieldoo.io/](https://docs.shieldoo.io/).
  
## Development and testing
The site is based on [Jekyll](https://jekyllrb.com/) template.

To run the site locally, follow the [github instruction](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll). 

**NOTE** Please keep in mind that the site is rooted in the `/docs/` folder of the repo.

### Test in a nutshell

1. Clone the repository to your local machine `git clone git@github.com:cloudfieldcz/shieldoo-mesh-docs.git`.
2. Navigate to the root directory of the cloned repository `cd shieldoo-mesh-docs/docs`/
3. Install the required gems by running the following command: `bundle install`.
4. Start the Jekyll server by running the following command: `bundle exec jekyll serve`.

Open your web browser and go to http://localhost:4000/ to view the site.

## Deployment
The site is hosted on github pages and is deployed automatically from the `main` branch using a github action.
