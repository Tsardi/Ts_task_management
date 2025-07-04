# Ts_task_management

## features
- User authenticated with Auth0
- Protected routes for authenticated users
- add, edit, complete, and delete, tasks
- Tasks are persished in local storage
- responsive UI with react bootstrap

## getting started
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/ct-task-app.git
    cd ct-task-app
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Configure Auth0:
    - Update the Auth0 domain, client ID, and callback/logout URLs in [`src/auth/Auth0Provider.tsx`](src/auth/Auth0Provider.tsx) if needed.

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/`
  - `auth/` – Auth0 integration and authentication guards
  - `components/` – UI components (task dashboard, forms, navigation, etc.)
  - `interfaces/` – TypeScript interfaces
  - `App.tsx` – Main app with routing
  - `main.tsx` – Entry point

## Scripts

- `npm run dev` – Start development server
