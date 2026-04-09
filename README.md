# RootPay Registration Flow

A multi-step registration experience built with React + Vite on the frontend and Express on the backend.  
The current implementation is focused on a polished onboarding UI, predictable client-side validation, and a simple API surface that can be expanded.

## What This Project Does

- Guides a user through account creation in clear steps:
  - account type
  - mobile number
  - OTP verification
  - name and contact details
  - password setup
  - success confirmation modal
- Enforces input quality with per-step validation.
- Uses a 4-digit OTP input flow with digit-only behavior and auto-focus progression.

## Tech Stack

- Frontend: React 18, TypeScript, Vite, React Router
- Styling/UI: Tailwind CSS, custom registration components, Radix-based UI primitives
- Backend: Express 5, TypeScript
- Tooling: Vitest, Prettier

## Architecture Overview

The app is organized as two layers in a single repo:

- `client/`: SPA frontend
- `server/`: Express API server
- `shared/`: types shared between client and server

### Frontend Structure

- `client/pages/Index.tsx`
  - Orchestrates the entire registration flow.
  - Stores step state and user-entered form data.
  - Controls forward/back transitions between steps.
  - Renders the success modal and resets the flow after completion.

- `client/components/registration/`
  - `AccountTypeStep.tsx`
  - `MobileStep.tsx`
  - `OtpStep.tsx`
  - `NameStep.tsx`
  - `PasswordStep.tsx`
  - `SuccessModal.tsx`
  - `RegistrationLayout.tsx`
  - `NavigationButtons.tsx`

Each step is a focused component that receives controlled values and callbacks from `Index.tsx`.


## Validation and UX Decisions

### 1) Validation Trigger Strategy

Validation errors are shown after user intent (on Continue/Submit click), instead of instantly while the user is typing.  
This was chosen to avoid noisy early errors and keep progression predictable.

### 2) Step-Local Validation

Each step validates only its own inputs before allowing progression:

- Account Type: selection required
- Mobile: required, digits only, exactly 10 digits
- OTP: exactly 4 digits
- Name Step:
  - first/last name required and restricted to valid name characters
  - email required with format validation
  - phone required and exactly 10 digits
- Password Step:
  - password required, minimum 6 characters
  - confirm password required, must match

### 3) Focus Management

Input focus is intentionally managed to reduce friction:

- Mobile/Name/Password first field auto-focused on step entry
- Password step uses refs and effect-based focus for reliability
- OTP auto-focuses to the next input and supports paste behavior

### 4) OTP Constraint

OTP was intentionally reduced to 4 digits to match the product requirement.  
The state model, input handling, and validation logic all enforce this consistently.

## Modal/Success UX Decisions

- Success popup includes:
  - completion heading
  - concise account summary
  - security reassurance section with green shield-check icon
- Password is intentionally not displayed in the summary modal.

## Run Locally

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm run dev
```

Build:

```bash
pnpm run build
```

Run production server build:

```bash
pnpm run start
```
