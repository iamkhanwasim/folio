What is Machine Learning
January 20, 2026
Most software does exactly what you tell it to do. Machine learning flips this. Instead of writing rules, you show the system examples and let it figure out the rules itself.
The basic idea: give an algorithm data, let it find patterns, then use those patterns to make predictions on new data. A spam filter doesn't have hardcoded rules about Nigerian princes. It learned from millions of emails what spam looks like.
Arthur Samuel defined it in 1959 as giving computers the ability to learn without being explicitly programmed. That definition still holds. The "learning" part means the system improves with more data.
Three things make ML work: data, algorithms and compute. Data is the raw material. Algorithms are the recipes for finding patterns. Compute is the horsepower to run the recipes at scale.
The practical test: can you write down the rules? If you can specify exactly when an email is spam or a tumor is malignant, use regular programming. If you can't, but you have labeled examples, ML might work.
One gotcha: ML isn't magic. It finds patterns in historical data. If your data is biased, your model is biased. If the future looks different from the past, your model breaks.
The field has existed since the 1950s, but it exploded recently because we finally have enough data and compute to make it practical.


Supervised and Unsupervised Learning
January 20, 2026
Machine learning splits into two main camps based on whether you have labels.
Supervised learning means you have input-output pairs. You show the algorithm houses with their sale prices and it learns to predict prices for new houses. The algorithm is "supervised" because you're telling it the right answers during training.
Supervised learning has two flavors. Regression predicts continuous values: house prices, stock returns, temperature. Classification predicts categories: spam or not spam, tumor type, which digit (0-9) an image shows.
Unsupervised learning has no labels. You give the algorithm data and ask it to find structure. Nobody tells it what to look for.
Clustering groups similar things together. Customer segmentation is the classic example. You don't know in advance what segments exist. The algorithm finds natural groupings based on behavior patterns.
Dimensionality reduction compresses data while preserving important information. If you have 1000 features but most are redundant, PCA might reduce them to 50 while keeping 95% of the variance. This helps with visualization and speeds up other algorithms.
Anomaly detection finds outliers. Credit card fraud, manufacturing defects, network intrusions. The model learns what "normal" looks like, then flags anything that doesn't fit.
The practical distinction: if you have labeled data and want predictions, use supervised. If you want to explore structure in unlabeled data, use unsupervised.
Most real-world ML is supervised. Labels are expensive but prediction is valuable.


Linear Regression
January 20, 2026
Linear regression is the simplest supervised learning algorithm. It fits a straight line through your data.
The model: y = wx + b. You have an input x, a weight w and a bias b. The output y is your prediction. With multiple inputs, it becomes y = w₁x₁ + w₂x₂ + ... + b.
Training means finding the w and b that make the line fit the data best. "Best" usually means minimizing the sum of squared errors between predictions and actual values.
A concrete example: predicting house prices from square footage. If w = 200 and b = 50000, the model predicts a 2000 sqft house costs 200(2000) + 50000 = $450,000.
The algorithm learns w and b from examples. You show it many houses with their actual prices. It adjusts the parameters until predictions match reality as closely as possible.
Linear regression assumes a linear relationship. If house prices actually follow a curve, a straight line won't fit well. You can add polynomial features (x², x³) to capture curves, but then you're really doing polynomial regression.
The practical value: it's interpretable. Each weight tells you how much that feature matters. A weight of 200 on square footage means each additional square foot adds $200 to the predicted price.
Linear regression is rarely the final answer, but it's always the first thing to try. If a straight line works, you don't need neural networks.


The Cost Function and Squared Error
January 20, 2026
A cost function measures how wrong your model is. Training means minimizing this function.
The squared error cost function: J(w,b) = (1/2m) × Σ(ŷᵢ - yᵢ)². For each training example, compute the prediction ŷ, subtract the actual value y, square the difference, sum them all up and divide by 2m (where m is the number of examples).
Why squares? Three reasons. First, squaring makes all errors positive. An error of -10 and +10 both contribute equally. Second, squaring penalizes big errors more than small ones. An error of 10 costs 100, but an error of 2 costs only 4. Third, squared error is mathematically convenient because its derivative is simple.
The division by 2m is a convention. Dividing by m averages the error across examples. The 2 cancels out when you take derivatives during gradient descent.
J(w,b) defines a surface over the parameter space. Each point (w,b) has a cost. Training finds the lowest point on this surface. For linear regression with squared error, this surface is convex, meaning there's one global minimum.
Example: if your model predicts [300k, 400k, 350k] but actual prices are [310k, 390k, 340k], the errors are [-10k, +10k, +10k]. Squared errors: [100M, 100M, 100M]. Sum: 300M. With m=3, J = 300M/6 = 50M.
The cost function is your compass. It tells you which direction makes the model better.


Gradient Descent
January 20, 2026
Gradient descent finds the minimum of a function by repeatedly taking small steps downhill.
The algorithm: start with random parameters. Compute the gradient (slope) of the cost function. Take a step in the opposite direction. Repeat until the cost stops decreasing.
The update rule: w = w - α × ∂J/∂w. Alpha (α) is the learning rate, which controls step size. The partial derivative ∂J/∂w tells you which direction is uphill. You go the other way.
For linear regression with squared error, the derivative is: ∂J/∂w = (1/m) × Σ(ŷᵢ - yᵢ)xᵢ. The error times the input, averaged across examples.
The learning rate matters. Too small and training takes forever. Too large and you overshoot the minimum, bouncing around or diverging entirely. Common starting values: 0.01, 0.001.
Batch gradient descent uses all training examples to compute each update. Stochastic gradient descent (SGD) uses one example at a time. Mini-batch uses small groups, typically 32-256 examples. Mini-batch is the standard choice: faster than batch, less noisy than pure SGD.
Convergence happens when the cost function stops decreasing significantly. In practice, you set a maximum number of iterations and stop early if improvements are tiny.
The visual intuition: imagine a ball rolling down a bowl. Gradient descent is that ball. The gradient tells it which way is down. The learning rate determines how big each roll is.
