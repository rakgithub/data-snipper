# UNIT TESt CASE PLAN:

# Article List:

1. Verify that the articles are present after we pass the data to the component based on data-testid.
2. Verify that the articles after loading are diplayed based on the popularity.
3. If there's no data we should not be exepecting any articles this we can check based on data-testid which we have provided to each Article.

# Article Data hook:

1.Verify that the hook fetches data from the provided CSV file path.
2.Verify that the hook parses the fetched CSV data correctly.
3. Verify that the hook sets the parsed data to the articles state variable.
4. Verify that the hook handles errors correctly.

# News Timeline:

1. Verify that the component renders correctly with the provided data.
2. Verify that the component displays the correct header title.
3. Verify that the component displays a maximum of 10 articles at a time.
4. Verify that "More Just in" link is displayed if there are more than 10 articles.
5. Verify that the component memoizes the articles list using useMemo.
6. Test that clicking on the "More Just in" link triggers the appropriate action.

# Article Timeline:

1. Verify that the component renders correctly with the provided data.
2. Verify that the component displays the correct article timestamp and title.
3. Verify that the component memoizes the rendered list of articles using memo.
