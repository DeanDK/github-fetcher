# Screenshot

![](screenshot_image/screenshot.PNG)

In order to start the application:

```
npm start
```

# Priorities

Priorities were mostly based around code quality and the architecture. In more realistic application, better validation, error handling and user experience should be implemented, e.g (loader gif while user is fatching data)

# Github error handling 
## Has to be taken into the consideration
After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with 403 Forbidden:

```
curl -i https://api.github.com -u valid_username:valid_password
HTTP/1.1 403 Forbidden
{
  "message": "Maximum number of login attempts exceeded. Please try again later.",
  "documentation_url": "https://developer.github.com/v3"
}
```

# Testing

Parts of the application were tested using Jest and Enzyme to show the proof of concept, such as Enzymes' Virtual DOM, routing tests, PropTypes verification and reducers.
