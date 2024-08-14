# Opportunity Finder

Opportunity Finder is a Next.js application designed to help users discover and apply for various opportunities, such as volunteer positions, internships, and more. The application provides a clean and modern interface, making it easy to explore and engage with opportunities that align with the user's skills and interests.

## Features

- **Opportunity Listing**: Browse a list of available opportunities.
- **Opportunity Details**: View detailed information about each opportunity.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search Functionality**: Quickly find opportunities based on specific criteria.
- **Interactive UI**: Includes hover effects, gradients, and other visual enhancements.

## Tech Stack

- **Next.js**: React framework for server-side rendering and generating static websites.
- **Redux Toolkit**: State management for handling API requests and data.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: JavaScript with static typing for type safety and developer tooling.
- **RTK Query**: Data fetching and caching tool built on Redux Toolkit.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/opportunity-finder.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd opportunity-finder
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running at [http://localhost:3000]http://localhost:3000.

## Project Structure

```plaintext
app/
  layout.tsx       # Main layout for the application
  page.tsx         # Homepage of the application
  opportunities/
    page.tsx       # Opportunities listing page
    [id]/page.tsx  # Opportunity details page
  features/
    Navbar.tsx     # Navbar component
    Error.tsx      # Error page for handling exceptions
    ...
redux/
  Provider.tsx     # To handle the redux store provider
  store.ts         # Redux store configuration
  services/
    types.ts       # TypeScript types
    customApi.tsx  # To fetch the datas using RTK query
```

## API Integration

The app integrates with an external API to fetch and display opportunities. The API requests are handled using `RTK Query`, which is part of the Redux Toolkit.

### Example API Endpoints
- Get All Opportunities:

```typescript
    useGetAllOpportunitiesQuery();
```

- Get Opportunity by ID:

```typescript
    useGetOpportunityByIdQuery(id);
```

## Styling
The application uses Tailwind CSS for styling. Key features include:

- **Gradient Backgrounds**: Applied to headers and footers.
- **Hover Effects**: Interactive elements with shadows and transitions.
- **Responsive Design**: Ensures compatibility across various screen sizes.

### Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

### Contact
For questions or collaboration, please reach out to [salasdelil8@gmail.com].

## Screenshots

![Jobs List Application Screenshot](public/Screenshot1.png)

### Description page for the selected job with specifications and calendar
![Jobs List Application Screenshot](public/Screenshot2.png)

