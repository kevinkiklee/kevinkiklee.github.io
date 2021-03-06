---
title: "Algorithms & Data Structures"
cover: "/covers/algorithm.png"
date: "2017-12-26"
time: "19:41"
category: "algods"
sticky: true
tags:
  - algorithm
  - data structures
---

---

## Data Structures

Choosing the right data structure makes your code intuitive.  Being able to recognize when to use a hash map, an array, or a graph can be important in solving a problem.

Let's look at a scheduling coding exercise that I recently helped someone try to solve: Given an array of the start times and the duration of each appointments, structure the requests to maximize the number of hours worked in a day.

```javascript
const requests = [
  ['10:00am', '30'],
  ['10:15am', '45'],
  ['10:30am', '20'],
  ['11:00am', '40'],
  // And more
]
```

I converted the data into the start time and the end time, in terms of minutes per day.  For example, `12:00am` would be `0` and `11:59pm` would be `1439` (there are 1440 minutes in a day):

```javascript
const requests = [
  [600, 630],
  [615, 660],
  [630, 650],
  [660, 700]
]
```

I recognized that it can be transformed into a graph problem, so I created a node:

```javascript
class Node {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.startTime = endTime;
    this.duration = endTime - startTime;
    this.parents = [];
    this.children = [];
  }
}
```

I ran it through an algorithm that connect all the nodes, and this was the result:

```javascript
const nodes = [
  {
    startTime: 600,
    endTime: 630,
    duration: 30,
    parents: [],
    children: [
      // Reference to [630, 650] node,
      // Reference to [660, 700] node
    ]
  },
  // Other nodes
]
```

The `10:30am` and `11:00am` nodes are both children of the `10:00am` node, because they do not overlap when the `10:00am` node ends at `10:30am`.  The `10:00am` node does not have any parents because there is no appointment before that.

Now, it is a simple graph problem.  Generate every possible path starting from each node, and compare the score of each path.  The score of the path is the sum of its node's duration.  Pick the path with the highest score, which is the optimal set of appointments.  Transforming the data structure to one that I was familiar with helped me see the solution to the problem.

This is actually a backtracking problem, and using a graph is an overkill.  However, at an interview, you will be faced with problems that you do not know how to solve, and sometimes just producing a solution is more important.  Also, I find the graph solution more intuitive to understand and explain, since it involves a common data structure and a simple traversal operation.
