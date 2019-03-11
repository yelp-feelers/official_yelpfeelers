# Yelp Feelers
___

Pitch: Analyze Yelp reviews to adjust star ratings based on user sentiment. Create an app/interface for browsing original reviews vs adjusted "true" reviews.

MVP: Apply sentiment analysis to taco reviews from the Yelp API. Create and adjusted review rating based on the sentiment of the review. Create a before and after adjusted review datasets. Grid layout to browse overall store reviews. Button to toggle between original and adjusted reviews.

Stretch Goals:  Drill down to view the individual reviews of a given store. View the true vs adjusted review scores of individual reviews in addition to the overall store star rating.

Dataset: https://www.kaggle.com/yelp-dataset/yelp-dataset - or Yelp API


- Every frontend/UI developer will be working in this repo, but on separate branches.

- After git cloning THIS repo:
   - `git checkout master` <---- Puts you on master branch.

   - You may need to `git pull` before creating a new branch. <--- Git pull fetches and downloads from the branch you are in and merges it with local repo
   
  - `git branch [firstname-lastname]` <-----  Creates the branch with your first and last name as branch name. 
     
  - `git checkout [firstname-lastname]` <---- Switches your working directory into your newly created branch.
  
  - `git push -u origin [firstname-lastname]` <-- Pushes that branch to GitHub.
  - Subsequent pushes after the above push can be done with `git push [firstname-lastname]`.
   
   Y- You can then `git commit` into that branch with all your changes.

   - **Once you have a fully functional feature:**
      -  `git merge master` <---- Merges your branch to the master repo.
      -  If you get any conflicts merging, contact me to help resolve them.


##### Initial Instructions

- You still need to run `yarn install` to get your node_modules.

- Netlify deployed site: [my-netlify-site].

- Reach out if you need help.
