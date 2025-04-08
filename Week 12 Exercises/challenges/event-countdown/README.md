## Getting Started

### Online classroom

To run this project:

1. Make sure you have [bun installed](https://bun.sh/docs/installation) on your computer
2. Open a terminal and navigate to the project directory
3. Run `bun install` to install the necessary dependencies
4. Run `bun dev` to start the development server
5. Check your terminal for the URL, open that URL in your browser

### Offline classroom

1. Duplicate the `react-boilerplate` folder
2. Rename the folder `react-project-name-challenge`
3. Open a terminal and navigate to the project directory
4. Run `bun dev` in the terminal
5. Hold the `command` key and click on the URL

# Event Countdown Challenge

In this challenge, you'll build a React app that displays a countdown to a specific event. You'll create a reusable countdown component that takes the event name and date as props, and separate components for days, hours, and minutes left.

## Setup

1. Make sure you have Node.js installed on your computer.
2. Open your terminal and navigate to the project directory.
3. Run the following commands to set up the project:

```bash
npm install
npm start
```

This will install the necessary dependencies and start the development server.

## Challenge Steps

1. Create `src/Countdown.js`. This component should accept `eventName` and `eventDate` as props. Your task is to implement the countdown functionality with the following structure:

   - Create separate components for DaysLeft, HoursLeft, and MinutesLeft.
   - The Countdown component should calculate the time remaining and pass the appropriate values to these sub-components.
   - Display the event name along with the countdown components.

2. Implement the DaysLeft component:

   - Accept `days` as a prop.
   - Display the number of days left.

3. Implement the HoursLeft component:

   - Accept `hours` as a prop.
   - Display the number of hours left.

4. Implement the MinutesLeft component:

   - Accept `minutes` as a prop.
   - Display the number of minutes left.

5. In the Countdown component, use these sub-components to display the full countdown.

6. Style your components to make the countdown visually appealing.

## Note on Countdown Functionality

In this challenge, the countdown won't change dynamically as that requires a concept called 'state', which you'll learn about in the next module. For now, the countdown will update each time the component is refreshed or the page is reloaded.

## Tips for Creating a Simple Countdown in React

<details>
<summary>Click to expand</summary>

1. Use a function to calculate the time left until the event date.

2. Create functional components for Countdown, DaysLeft, HoursLeft, and MinutesLeft.

3. Pass the calculated values as props to the respective components.

Here's a basic structure you can follow:

```javascript
// Utility function to calculate time left
const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const target = new Date(targetDate);
  const timeDiff = target - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
};

// Countdown component
const Countdown = ({ eventName, eventDate }) => {
  const { days, hours, minutes } = calculateTimeLeft(eventDate);

  return (
    <div>
      <h2>{eventName}</h2>
      <DaysLeft days={days} />
      <HoursLeft hours={hours} />
      <MinutesLeft minutes={minutes} />
    </div>
  );
};

// Sub-components
const DaysLeft = ({ days }) => <p>{days} days</p>;
const HoursLeft = ({ hours }) => <p>{hours} hours</p>;
const MinutesLeft = ({ minutes }) => <p>{minutes} minutes</p>;
```

4. Use the Countdown component in your App.js file, passing the necessary props.

</details>

## Bonus Challenges

- Add the ability to input multiple events and display countdowns for all of them.
- Implement a feature to add new events through a form in the UI.

Good luck, and happy coding!
