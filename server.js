const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Sample quotes as objects
const quotes = [
    {
        "quote": "Don't wish it were easier, wish you were better.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Either you run the day, or the day runs you.",
        "author": "Jim Rohn"
      },
      {
        "quote": "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
        "author": "Stephen Covey"
      },
      {
        "quote": "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        "author": "Stephen King"
      },
      {
        "quote": "The secret of getting ahead is getting started.",
        "author": "Mark Twain"
      },
      {
        "quote": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
      },
      {
        "quote": "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
        "author": "Paul J. Meyer"
      },
      {
        "quote": "Focus more on your desire than on your doubt, and the dream will take care of itself.",
        "author": "Mark Cuban"
      },
      {
        "quote": "The difference between ordinary and extraordinary is that little extra.",
        "author": "Jimmy Johnson"
      },
      {
        "quote": "Action is the foundational key to all success.",
        "author": "Pablo Picasso"
      },
      {
        "quote": "Start where you are. Use what you have. Do what you can.",
        "author": "Arthur Ashe"
      },
      {
        "quote": "The successful warrior is the average man, with laser-like focus.",
        "author": "Bruce Lee"
      },
      {
        "quote": "Efficiency is doing things right; effectiveness is doing the right things.",
        "author": "Peter Drucker"
      },
      {
        "quote": "Long-range planning does not deal with the future decisions, but with the future of present decisions.",
        "author": "Peter Drucker"
      },
      {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
      },
      {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "quote": "If you spend too much time thinking about a thing, you’ll never get it done.",
        "author": "Bruce Lee"
      },
      {
        "quote": "The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to actually do something about them. Not tomorrow. Not next week. But today.",
        "author": "Nolan Bushnell"
      },
      {
        "quote": "It's not about better time management. It's about better life management.",
        "author": "Alexandra K. Trenfor"
      },
      {
        "quote": "Don't measure yourself by what you have accomplished, but by what you should have accomplished with your ability.",
        "author": "John Wooden"
      },
      {
        "quote": "Discipline is the bridge between goals and accomplishment.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Motivation is what gets you started. Habit is what keeps you going.",
        "author": "Jim Rohn"
      },
      {
        "quote": "We must all suffer one of two things: the pain of discipline or the pain of regret.",
        "author": "Jim Rohn"
      },
      {
        "quote": "It's not whether you get knocked down, it's whether you get up.",
        "author": "Vince Lombardi"
      },
      {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
      },
      {
        "quote": "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
        "author": "Vince Lombardi"
      },
      {
        "quote": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        "author": "Vince Lombardi"
      },
      {
        "quote": "The harder I work, the luckier I get.",
        "author": "Samuel Goldwyn"
      },
      {
        "quote": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
      },
      {
        "quote": "I find that the harder I work, the more luck I seem to have.",
        "author": "Thomas Jefferson"
      },
      {
        "quote": "Perseverance is not a long race; it is many short races one after the other.",
        "author": "Walter Elliot"
      },
      {
        "quote": "You may have to fight a battle more than once to win it.",
        "author": "Margaret Thatcher"
      },
      {
        "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
        "author": "Dale Carnegie"
      },
      {
        "quote": "Patience, persistence and perspiration make an unbeatable combination for success.",
        "author": "Napoleon Hill"
      },
      {
        "quote": "It’s not that I’m so smart, it’s just that I stay with problems longer.",
        "author": "Albert Einstein"
      },
      {
        "quote": "Ambition is the path to success. Persistence is the vehicle you arrive in.",
        "author": "Bill Bradley"
      },
      {
        "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "author": "Thomas Edison"
      },
      {
        "quote": "A river cuts through rock, not because of its power, but because of its persistence.",
        "author": "Jim Watkins"
      },
      {
        "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "author": "Thomas Edison"
      },
      {
        "quote": "Work harder on yourself than you do on your job.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Don't join an easy crowd; you won't grow. Go where the expectations and the demands to perform are high.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Your level of success will rarely exceed your level of personal development.",
        "author": "Jim Rohn"
      },
      {
        "quote": "You are the average of the five people you spend the most time with.",
        "author": "Jim Rohn"
      },
      {
        "quote": "If you don't like how things are, change it! You're not a tree.",
        "author": "Jim Rohn"
      },
      {
        "quote": "The mind is everything. What you think you become.",
        "author": "Buddha"
      },
      {
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
      },
      {
        "quote": "What the mind can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
      },
      {
        "quote": "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
        "author": "William James"
      },
      {
        "quote": "Change your thoughts and you change your world.",
        "author": "Norman Vincent Peale"
      },
      {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "quote": "With the right attitude, nothing is impossible.",
        "author": "Unknown"
      },
      {
        "quote": "A man is but the product of his thoughts. What he thinks, he becomes.",
        "author": "Mahatma Gandhi"
      },
      {
        "quote": "We become what we think about.",
        "author": "Earl Nightingale"
      },
      {
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs"
      },
      {
        "quote": "The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        "author": "Mark Zuckerberg"
      },
      {
        "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "author": "Joshua Marine"
      },
      {
        "quote": "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
        "author": "Oprah Winfrey"
      },
      {
        "quote": "You must be the change you wish to see in the world.",
        "author": "Mahatma Gandhi"
      },
      {
        "quote": "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
        "author": "Barack Obama"
      },
      {
        "quote": "Leadership is doing what is right when no one is watching.",
        "author": "George Van Valkenburg"
      },
      {
        "quote": "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.",
        "author": "Jack Welch"
      },
      {
        "quote": "The function of leadership is to produce more leaders, not more followers.",
        "author": "Ralph Nader"
      },
      {
        "quote": "Earn your leadership every day.",
        "author": "Michael Jordan"
      },
      {
        "quote": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
        "author": "Lao Tzu"
      },
      {
        "quote": "The best leaders are clear. They continually communicate to ensure people understand and stay focused.",
        "author": "Tim Hiller"
      },
      {
        "quote": "The quality of a leader is reflected in the standards they set for themselves.",
        "author": "Ray Kroc"
      },
      {
        "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
        "author": "John Quincy Adams"
      },
      {
        "quote": "Leadership is not about being in charge. It is about taking care of those in your charge.",
        "author": "Simon Sinek"
      },
      {
        "quote": "The price of greatness is responsibility.",
        "author": "Winston Churchill"
      },
      {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
      },
      {
        "quote": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
      },
      {
        "quote": "The road to success is always under construction.",
        "author": "Lily Tomlin"
      },
      {
        "quote": "Don't be afraid to give up the good to go for the great.",
        "author": "John D. Rockefeller"
      },
      {
        "quote": "The starting point of all achievement is desire.",
        "author": "Napoleon Hill"
      },
      {
        "quote": "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
        "author": "Jim Rohn"
      },
      {
        "quote": "To avoid criticism, do nothing, say nothing, be nothing.",
        "author": "Elbert Hubbard"
      },
      {
        "quote": "Big shots are only little shots who keep shooting.",
        "author": "Christopher Morley"
      },
      {
        "quote": "It has become appallingly obvious that our technology has exceeded our humanity.",
        "author": "Albert Einstein"
      },
      {
        "quote": "Time is more valuable than money. You can get more money, but you cannot get more time.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill"
      },
      {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        "author": "Thomas Edison"
      },
      {
        "quote": "Lost time is never found again.",
        "author": "Benjamin Franklin"
      },
      {
        "quote": "Every second is of infinite value.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "quote": "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
        "author": "Barack Obama"
      },
      {
        "quote": "Never leave till tomorrow that which may be done day.",
        "author": "Benjamin Franklin"
      },
      {
        "quote": "Procrastination is the thief of time, collar him.",
        "author": "Charles Dickens"
      },
      {
        "quote": "You can't make up for lost time. You can only do better in the future.",
        "author": "Ashley Ormon"
      },
      {
        "quote": "Whatever you are, be a good one.",
        "author": "Abraham Lincoln"
      },
      {
        "quote": "The best revenge is massive success.",
        "author": "Frank Sinatra"
      },
      {
        "quote": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll"
      },
      {
        "quote": "Knowing is not enough; we must apply. Willing is not enough; we must do.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "quote": "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "author": "William Butler Yeats"
      },
      {
        "quote": "The journey of a thousand miles begins with one step.",
        "author": "Lao Tzu"
      },
      {
        "quote": "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.",
        "author": "Charles Darwin"
      },
      {
        "quote": "Happiness is not something readymade. It comes from your own actions.",
        "author": "Dalai Lama"
      },
      {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi"
      },
      {
        "quote": "Life shrinks or expands in proportion to one's courage.",
        "author": "Anaïs Nin"
      },
      {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
      },
      {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
      },
      {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
      },
      {
        "quote": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson"
      },
      {
        "quote": "The secret of getting ahead is getting started.",
        "author": "Mark Twain"
      },
      {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
      },
      {
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
      },
      {
        "quote": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
      },
      {
        "quote": "The difference between ordinary and extraordinary is that little extra.",
        "author": "Jimmy Johnson"
      },
      {
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs"
      },
      {
        "quote": "The road to success is always under construction.",
        "author": "Lily Tomlin"
      },
      {
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
      },
      {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
      },
      {
        "quote": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky"
      },
      {
        "quote": "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
        "author": "Joshua Marine"
      },
      {
        "quote": "If you want to achieve greatness stop asking for permission.",
        "author": "Eddie Colla"
      },
      {
        "quote": "Start where you are. Use what you have. Do what you can.",
        "author": "Arthur Ashe"
      },
      {
        "quote": "The mind is everything. What you think you become.",
        "author": "Buddha"
      },
      {
        "quote": "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        "author": "Dale Carnegie"
      },
      {
        "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi"
      },
      {
        "quote": "The unexamined life is not worth living.",
        "author": "Socrates"
      },
      {
        "quote": "Knowing yourself is the beginning of all wisdom.",
        "author": "Aristotle"
      },
      {
        "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author": "Robert Frost"
      },
      {
        "quote": "It is never too late to be what you might have been.",
        "author": "George Eliot"
      },
      {
        "quote": "You must be the change you wish to see in the world.",
        "author": "Mahatma Gandhi"
      },
      {
        "quote": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "quote": "Happiness is not something readymade. It comes from your own actions.",
        "author": "Dalai Lama"
      },
      {
        "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        "author": "Helen Keller"
      },
      {
        "quote": "Life is 10% what happens to you and 90% how you react to it.",
        "author": "Charles R. Swindoll"
      },
      {
        "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "author": "Aristotle"
      },
      {
        "quote": "The purpose of life, after all, is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
        "author": "Eleanor Roosevelt"
      },
      {
        "quote": "You have power over your mind - not outside events. Realize this, and you will find strength.",
        "author": "Marcus Aurelius"
      },
      {
        "quote": "If you don't like something, change it. If you can't change it, change your attitude.",
        "author": "Maya Angelou"
      },
      {
        "quote": "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
        "author": "Oprah Winfrey"
      },
      {
        "quote": "When I let go of what I am, I become what I might be.",
        "author": "Lao Tzu"
      },
      {
        "quote": "You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to be.",
        "author": "Napoleon Hill"
      },
      {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
      },
      {
        "quote": "Don't be afraid to give up the good to go for the great.",
        "author": "John D. Rockefeller"
      },
      {
        "quote": "A leader is one who knows the way, goes the way, and shows the way.",
        "author": "John C. Maxwell"
      },
      {
        "quote": "The supreme quality for leadership is unquestionably integrity. Without it, no real success is possible.",
        "author": "Dwight D. Eisenhower"
      },
      {
        "quote": "Leadership is not about being in charge. It is about taking care of the people in your charge.",
        "author": "Simon Sinek"
      },
      {
        "quote": "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.",
        "author": "Jack Welch"
      },
      {
        "quote": "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are.",
        "author": "Lyndon B. Johnson"
      },
      {
        "quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
        "author": "John Quincy Adams"
      },
      {
        "quote": "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
        "author": "Abraham Lincoln"
      },
      {
        "quote": "The task of the leader is to get his people from where they are to where they have not been.",
        "author": "Henry Kissinger"
      },
      {
        "quote": "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go, but ought to be.",
        "author": "Rosalynn Carter"
      },
      {
        "quote": "Effective leadership is not about making speeches or being liked; leadership is defined by results not attributes.",
        "author": "Peter Drucker"
      },
      {
        "quote": "The only true wisdom is in knowing you know nothing.",
        "author": "Socrates"
      },
      {
        "quote": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        "author": "Rumi"
      },
      {
        "quote": "The more I learn, the more I realize how much I don't know.",
        "author": "Albert Einstein"
      },
      {
        "quote": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
      },
      {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "The journey of a thousand miles begins with a single step.",
        "author": "Lao Tzu"
      },
      {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        "author": "Martin Luther King, Jr."
      },
      {
        "quote": "Not all those who wander are lost.",
        "author": "J.R.R. Tolkien"
      },
      {
        "quote": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        "author": "George Bernard Shaw"
      },
      {
        "quote": "You will face many defeats in life, but never let yourself be defeated.",
        "author": "Maya Angelou"
      },
      {
        "quote": "The rich invest in time, the poor invest in money.",
        "author": "Warren Buffett"
      },
      {
        "quote": "Price is what you pay. Value is what you get.",
        "author": "Warren Buffett"
      },
      {
        "quote": "It's better to hang out with people better than you. Pick out associates whose behavior is better than yours and you'll drift in that direction.",
        "author": "Warren Buffett"
      },
      {
        "quote": "Risk comes from not knowing what you're doing.",
        "author": "Warren Buffett"
      },
      {
        "quote": "Rule No. 1: Never lose money. Rule No. 2: Never forget rule No. 1.",
        "author": "Warren Buffett"
      },
      {
        "quote": "Someone's sitting in the shade today because someone planted a tree a long time ago.",
        "author": "Warren Buffett"
      },
      {
        "quote": "If you don't find a way to make money while you sleep, you will work until you die.",
        "author": "Warren Buffett"
      },
      {
        "quote": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        "author": "Thomas Edison"
      },
      {
        "quote": "The key is to invest in yourself.",
        "author": "Warren Buffett"
      },
      {
        "quote": "Don’t tell me what you value, show me your budget, and I’ll tell you what you value.",
        "author": "Joe Biden"
      },
      {
        "quote": "Courage is not the absence of fear, but the triumph over it.",
        "author": "Nelson Mandela"
      },
      {
        "quote": "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.'",
        "author": "Eleanor Roosevelt"
      },
      {
        "quote": "Our greatest glory is not in never failing, but in rising up every time we fail.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "quote": "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        "author": "Nelson Mandela"
      },
      {
        "quote": "With the new day, comes new strength and new thoughts.",
        "author": "Eleanor Roosevelt"
      },
      {
        "quote": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        "author": "Helen Keller"
      },
      {
        "quote": "Life shrinks or expands in proportion to one's courage.",
        "author": "Anais Nin"
      },
      {
        "quote": "You may have to fight a battle more than once to win it.",
        "author": "Margaret Thatcher"
      },
      {
        "quote": "The greatest test of courage on earth is to bear defeat without losing heart.",
        "author": "Robert Ingersoll"
      },
      {
        "quote": "Fall seven times, stand up eight.",
        "author": "Japanese Proverb"
      },
      {
        "quote": "The best way to find yourself is to lose yourself in the service of others.",
        "author": "Mahatma Gandhi"
      },
      {
        "quote": "Love is the only force capable of transforming an enemy into a friend.",
        "author": "Martin Luther King, Jr."
      },
      {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt"
      },
      {
        "quote": "The purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.",
        "author": "Kurt Vonnegut"
      },
      {
        "quote": "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        "author": "Martin Luther King, Jr."
      },
      {
        "quote": "We must learn to live together as brothers or perish together as fools.",
        "author": "Martin Luther King, Jr."
      },
      {
        "quote": "Kindness is a language which the deaf can hear and the blind can see.",
        "author": "Mark Twain"
      },
      {
        "quote": "You can easily judge the character of a man by how he treats those who can do nothing for him.",
        "author": "Malcolm S. Forbes"
      },
      {
        "quote": "When you get, give. When you learn, teach.",
        "author": "Maya Angelou"
      },
      {
        "quote": "To err is human, to forgive, divine.",
        "author": "Alexander Pope"
      },
      {
        "quote": "Formal education will make you a living; self-education will make you a fortune.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Happiness is not by chance, but by choice.",
        "author": "Jim Rohn"
      },
      {
        "quote": "If you don't like how things are, change it! You're not a tree.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Don't wish it was easier, wish you were better.",
        "author": "Jim Rohn"
      },
      {
        "quote": "You must take personal responsibility. You cannot change the circumstances, the seasons, or the wind, but you can change yourself.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Either you run the day or the day runs you.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Motivation is what gets you started. Habit is what keeps you going.",
        "author": "Jim Rohn"
      },
      {
        "quote": "The major value in life is not what you get. The major value in life is what you become.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Success is nothing more than a few simple disciplines, practiced every day; while failure is simply a few errors in judgment, repeated every day.",
        "author": "Jim Rohn"
      },
      {
        "quote": "Learn how to be happy with what you have, while you pursue all that you want.",
        "author": "Jim Rohn"
      }
];

// GET endpoint for all quotes
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Quotes API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});