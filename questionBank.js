
const questionBank = {
  "Grade 8": {
    "Algebra": {
      "Knowledge": [
        { text: "Simplify: 3x + 5x", image: null },
        { text: "What is the value of x if x + 2 = 7?", image: null },
        { text: "Identify the coefficient of x in 4x - 3", image: null },
        { text: "Define a variable.", image: null }
      ],
      "Application": [
        { text: "Solve: 2(x + 3) = 14", image: null },
        { text: "Factor: x² - 4", image: null },
        { text: "Expand: (x + 2)(x + 5)", image: null }
      ],
      "Reasoning": [
        { text: "Explain how to solve an equation step-by-step.", image: null },
        { text: "Why do we balance equations by doing the same on both sides?", image: null }
      ]
    },
    "Geometry": {
      "Knowledge": [
        { text: "Name the types of triangles.", image: "triangle-types" },
        { text: "What is a right angle?", image: "angle-right" }
      ],
      "Application": [
        { text: "Calculate the area of a triangle with base 6cm and height 4cm.", image: "triangle-area" }
      ],
      "Reasoning": [
        { text: "Why do triangle angles always add up to 180°?", image: "triangle-sum" }
      ]
    }
  },
  "Grade 9": {
    "Algebra": {
      "Knowledge": [
        { text: "What is a quadratic expression?", image: null },
        { text: "Identify the degree of the polynomial: x² + 3x + 2", image: null }
      ],
      "Application": [
        { text: "Factorise: x² - 5x + 6", image: null },
        { text: "Solve: 2x² = 18", image: null }
      ],
      "Reasoning": [
        { text: "Explain how to use the quadratic formula.", image: null }
      ]
    },
    "Graphs": {
      "Knowledge": [
        { text: "What is the y-intercept of y = 2x + 1?", image: "line-graph" }
      ],
      "Application": [
        { text: "Find the slope of the line in the diagram.", image: "slope-graph" }
      ],
      "Reasoning": [
        { text: "Explain the shape of y = x².", image: "parabola-graph" }
      ]
    }
  }
};

if (typeof module !== 'undefined') {
  module.exports = questionBank;
}
