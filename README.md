# GoT API app

Simple React app for displaying data from an API of Ice And Fire[https://anapioficeandfire.com/]. That API uses no authentication and is available over HTTPS.

## About

The application displays the Table of Characters page.
From the Table of Characters users can go to a dedicated page with the House Details.
From the House Details page it should be possible to go back to the Table of Characters page.

### `Table of Characters`

#### `Columns`

`Character`
Concatenate character name and all aliases using comma.

`Alive`
Based on born and died fields:

- Display "Unknown” if both born and died are not provided.
- Display "No” if born is not provided.
- Display "Yes" when Character has not died.

`Gender`
Based on the gender field.

`Culture`
Based on the culture field.
Display "Unknown" when not provided.

`Allegiances`
Display list of House id fields based on what is found in allegiances field.

### `House Details`

The page with the House Details should display the following data:

- Name of the House
- Region
- Coat of Arms
- Words
- Titles
- Seats
- Has died out
- Has overlord
- Number of Cadet Branches
  Each House should be accessible by a dedicated URL.
