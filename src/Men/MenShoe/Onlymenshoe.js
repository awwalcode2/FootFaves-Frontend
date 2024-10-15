// def samuel_artwork(unfinished_drawing):
//     if not unfinished_drawing:
//         return [["No Art To Complete"]]

//        # setting completed_drawing to an empty atray

//     completed_drawing = []
//     rows = len(unfinished_drawing)
//     cols = len(unfinished_drawing[0])

//     # looping through it 

//     for i in range(rows):
//         completed_row = []
//         for j in range(cols):
//             if unfinished_drawing[i][j] == ' ':
//                 completed_row.append(' ')
//             elif unfinished_drawing[i][j] == '|':
//                 completed_row.append('|')
//             elif unfinished_drawing[i][j] == '1':
//                 # Complete '1' to '1' where applicable
//                 if i < rows - 1 and unfinished_drawing[i + 1][j] == ' ':
//                     completed_row.append("1")
//                 else:
//                     completed_row.append(" ")
//             else:
//                 completed_row.append(" ")
        
//         completed_drawing.append(completed_row)

//     # Post-process to replace spaces below "|"

//     for i in range(rows):
//         for j in range(cols):
//             if completed_drawing[i][j] == ' ' and j > 0 and completed_drawing[i][j - 1] == '|':
//                 completed_drawing[i][j] = '1' if i > 0 and completed_drawing[i - 1][j] == '1' else ' '

//     return completed_drawing

// # try to Test the function with the unfinished drawing

// unfinished_drawing = [
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', '|', '1', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', '|', ' ', '1', ' ', ' '],
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', '1', ' '],
//     [' ', ' ', ' ', ' ', '|', '1', '1', '1', '1'],
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '1'],
//     [' ', ' ', ' ', ' ', '|', ' ', '1', ' ', '1'],
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '1'],
//     [' ', ' ', ' ', ' ', '|', '1', '1', ' ', '1'],
//     [' ', ' ', ' ', ' ', '|', ' ', '1', ' ', '1'],
//     [' ', ' ', ' ', ' ', '|', ' ', '1', ' ', '1'],
//     [' ', ' ', ' ', ' ', '|', ' ', '1', ' ', '1'],
//     [' ', ' ', ' ', ' ', '|', '1', '1', '1', '1'],
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '],
//     [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ']
// ]

// completed_drawing = samuel_artwork(unfinished_drawing)

// for row in completed_drawing:
//     print("".join(row))







// Title: Delivery Route Optimization

// A delivery company needs to optimize its routes to minimize travel time and fuel consumption. Given a list of delivery locations and the time it takes to travel between locations, create a function that returns the most efficient delivery route starting from the company's depot and ending back at the depot. Assume the travel times between locations are symmetric (i.e., time from A to B is the same as B to A), and each location must be visited exactly once.

// The function should find the shortest possible route using a nearest-neighbor heuristic (not necessarily the absolute optimal route).

// def find_delivery_route(locations: List[str], travel_times: List[List[int]]) -> List[str]:
//     """
//     Given a list of locations and a matrix of travel times between each location,
//     return the delivery route that minimizes travel time using a nearest-neighbor heuristic.

//     :param locations: List of strings, where each string represents a delivery location (including depot).
//     :param travel_times: A 2D list of integers where travel_times[i][j] represents the time it takes to travel from location i to location j.
//     :return: A list of strings representing the order of locations to visit, starting and ending at the depot.
//     """




// {loader? <button className='button'>processing...</button>:<button className='button' type='submit'>Sign up</button>}





// You are managing an IoT network and need to communicate with multiple devices over MQTT. Your task is to design a system where you can send commands to a specific device and receive its response. The system should handle simultaneous communication with multiple devices efficiently.

// func send_command(deviceID string, command int) (response string, err error)
// Notes:

// The system will be handling a large number of messages, so it should discard any messages that are not relevant to the current request.

















// Data Structure Description

// : You have a binary search tree where each node represents a decision point in a magical town. The tree has one entrance (root), and multiple exits (leaf nodes). However, you can only move to a child node if its value is greater than the parent. Create a function count_maze_exits that takes the root of this binary search tree and returns the number of viable exits.









                                                // IMPORTANT


                                                // Problem: Optimizing Delivery Schedules for Trucks
                                                // In the busy city of Deliveropolis, there are n deliveries that need to be handled by k trucks. Each truck can carry multiple deliveries, but there's a limit to how much weight each truck can handle. The goal is to assign deliveries to trucks such that the maximum load carried by any truck is minimized.
                                                
                                                // James, the logistics manager, wants to schedule the deliveries in a way that minimizes the heaviest truck's load, ensuring that no truck is overburdened. Your task is to determine the minimum possible value of the maximum load carried by any truck.
                                                
                                                // Input Format:
                                                
                                                // Two integers, n (1 ≤ n ≤ 1000) and k (1 ≤ k ≤ 100), where n is the number of deliveries and k is the number of trucks.
                                                // An array of n integers, each representing the weight of a delivery.
                                                // Output Format:
                                                
                                                // Return a single integer, the minimum possible value of the maximum load any truck carries.
                                                // Error Handling:
                                                
                                                // Throw errors if:
                                                // The input is invalid.
                                                // n and k are not in their respective ranges.
                                                // The length of the array is not equal to n.
                                                // Edge Cases to Consider:
                                                
                                                // Single delivery (n = 1)
                                                // Single truck (k = 1)
                                                // Number of trucks greater than or equal to number of deliveries (k ≥ n)
                                                // All deliveries have the same weight


                                                // function minimizeMaxTruckLoad(n: number, k: number, deliveryWeights: number[]): number {
                                                //     // Implementation goes here
                                                //   }
                                                  

                                                



















//   1. Automating Daily Task Reminders (Python)
// Category: Completion
// Problem:
// You are building a personal reminder system to help people automate their daily tasks. Write a function schedule_reminders(tasks: List[Tuple[str, str]]) -> List[str] where tasks is a list of tuples. Each tuple contains a task name and a time in 24-hour format (e.g., "14:30"). The function should return a list of task reminders in the format: "Task: <task_name> is due at <time>". Additionally, ensure that tasks are sorted in order of the time they are due.                                              
// {

//     schedule_reminders([("Water Plants", "08:30"), ("Check Emails", "09:00"), ("Workout", "18:00")])
// # Output: ["Task: Water Plants is due at 08:30", "Task: Check Emails is due at 09:00", "Task: Workout is due at 18:00"]



// }










// Budget Tracker (JavaScript)
// Category: Completion
// Problem:
// Create a simple budget tracker function trackSpending(transactions: [{name: string, amount: number, type: string}], budget: number) -> {remainingBudget: number, status: string}. The function receives a list of transactions and the total budget. Each transaction has a name, an amount, and a type ("income" or "expense"). Calculate the remaining budget and return the status as "Under budget", "On budget", or "Over budget" depending on the spending.

// {


//     trackSpending([
//     {name: "Groceries", amount: 50, type: "expense"},
//     {name: "Salary", amount: 1000, type: "income"},
//     {name: "Gym", amount: 30, type: "expense"}
// ], 1000);


// }













// Smart Grocery List (Go)
// Category: Completion
// Problem:
// Write a function generateGroceryList(recipes: []Recipe, stock: []Stock) []string that helps users create an optimized grocery list. The function takes a list of Recipe structs, each containing name and ingredients. It also takes a Stock list of ingredients the user already has. The function should return a list of missing ingredients needed to prepare all recipes.

// {


// type Recipe struct {
//     Name string
//     Ingredients []string
// }

// type Stock struct {
//     Item string
// }

// generateGroceryList([]Recipe{
//     {"Pasta", []string{"Tomatoes", "Pasta", "Cheese"}},
//     {"Salad", []string{"Lettuce", "Tomatoes", "Cucumber"}},
// }, []Stock{
//     {"Pasta"}, {"Cheese"}
// })


// }













// Fitness Tracker (Python)
// Category: Completion
// Problem:
// Implement a function analyze_steps(steps_data: List[Tuple[str, int]]) -> Dict[str, str] that analyzes the number of steps a user takes each day. The input is a list of tuples where each tuple represents a date and the number of steps. The function should return a dictionary where the key is the day and the value is "Met goal" if the user took more than 10,000 steps or "Missed goal" otherwise.

// {
//     analyze_steps([("2024-10-01", 12000), ("2024-10-02", 9000), ("2024-10-03", 11000)])
// # Output: {"2024-10-01": "Met goal", "2024-10-02": "Missed goal", "2024-10-03": "Met goal"}
// }


















// . Smart Home Lighting (C++)
// Category: Completion
// Problem:
// You are working on a smart home system that controls lighting based on time and user presence. Write a class SmartLight that has methods:

// turnOn() to turn on the light.
// turnOff() to turn off the light.
// isOn() to check the light status.
// setSchedule(time: string) to set the light's turn-on schedule (e.g., "18:00").
// The lights should automatically turn on at the scheduled time and turn off after 12 hours.


// {

//     SmartLight light;
// light.setSchedule("18:00");
// light.turnOn();  // Manually turns the light on
// light.isOn();    // Returns true



// }
























// Meal Planner (Python)
// Category: Completion
// Problem:
// Write a function meal_plan(available_ingredients: List[str], recipes: List[Dict[str, List[str]]]) -> List[str] that suggests meals you can prepare based on available ingredients. Each recipe is a dictionary with the meal name as the key and a list of required ingredients as the value. Return a list of meal names that can be prepared with the given ingredients.

// {


//     meal_plan(
//         ["Eggs", "Bread", "Milk", "Chicken"],
//         [{"Pancakes": ["Milk", "Eggs", "Flour"]}, {"Sandwich": ["Bread", "Chicken"]}]
//     )
//     # Output: ["Sandwich"]

    

// }
















// Daily Water Intake Tracker (JavaScript)
// Category: Completion
// Problem:
// Create a function trackWaterIntake(intakes: [{date: string, amount: number}]) -> {average: number, status: string} that tracks daily water intake over the week. The function takes a list of water intake records (each with a date and the amount of water in liters). It returns the average water intake and whether the user met their daily goal (2 liters per day on average) with a status of "Goal met" or "Goal missed".

// {



//     trackWaterIntake([
//         {date: "2024-10-01", amount: 2},
//         {date: "2024-10-02", amount: 1.5},
//         {date: "2024-10-03", amount: 3}
//     ]);
  
    

// }













// Category: Completion
// Problem:
// Write a function comparePrices(items: []string, stores: []Store) []string that takes a list of grocery items and compares their prices across multiple stores. Each Store struct contains the store name and a map of item prices. Return the cheapest store for each item.


// {


//     type Store struct {
//         Name  string
//         Prices map[string]float64
//     }
    
//     comparePrices(
//         []string{"Milk", "Eggs", "Bread"},
//         []Store{
//             {"Store A", map[string]float64{"Milk": 1.99, "Eggs": 2.50}},
//             {"Store B", map[string]float64{"Milk": 2.49, "Eggs": 2.20, "Bread": 1.99}},
//         }
//     )
//     //****** */ Output: ["Milk: Store A", "Eggs: Store B", "Bread: Store B"]
    


// }











// Weekly Fitness Goal Tracker (Python)
// Category: Completion
// Problem:
// You want to track your weekly fitness goals. Write a function track_fitness_goals(activities: List[Dict[str, int]]) -> str where each activity in the list is a dictionary containing the name of the activity (e.g., "Running", "Cycling") and the number of minutes spent on that activity. The function should sum up the total active minutes and return "Goal achieved" if the total is more than 150 minutes, otherwise return "Keep going".

// {


//     track_fitness_goals([
//         {"Running": 60}, 
//         {"Cycling": 30}, 
//         {"Yoga": 45}
//     ])
//     #***** Output: "Goal achieved"
    
// }













// Expense Splitter (Python)
// Category: Completion
// Problem:
// You went out with friends and want to split the expenses. Write a function split_expenses(expenses: List[Dict[str, float]]) -> Dict[str, float] that takes a list of expenses where each dictionary represents a person and their total spending. Return a dictionary that shows how much each person should contribute or receive to ensure the expenses are evenly split.

// {


//     split_expenses([
//         {"Alice": 30},
//         {"Bob": 50},
//         {"Charlie": 20}
//     ])
//     #**** Output: {"Alice": 10, "Bob": -10, "Charlie": 20}  # Alice needs to pay $10, Bob gets $10 back, Charlie owes $20

    
// }











// Smart Alarm System (C++)
// Category: Completion
// Problem:
// Implement a smart alarm system in C++. The system should have methods to set, check, and disable the alarm. Write a class SmartAlarm with the following methods:

// setAlarm(time: string) to set an alarm time in 24-hour format.
// checkAlarm(currentTime: string) -> bool to check if it's time to trigger the alarm.
// disableAlarm() to disable the alarm.
// The alarm should trigger only if the current time matches the set alarm time.

// {


//     SmartAlarm alarm;
// alarm.setAlarm("07:00");
// alarm.checkAlarm("07:00");  // Returns true, alarm triggers
// alarm.disableAlarm();

// }










// Packing List Optimizer (Java)
// Category: Completion
// Problem:
// Create a function optimizePackingList(destWeather: String, items: List<Item>) -> List<String> that generates an optimized packing list based on the weather at the destination. Each item has a name and a type ("clothing", "gadget", "accessory"). Depending on the weather ("cold", "hot", "rainy", etc.), suggest appropriate items for the user to pack.

// {


//     class Item {
//         String name;
//         String type;
//         // Constructor
//     }
    
//     optimizePackingList("cold", List.of(
//         new Item("Jacket", "clothing"),
//         new Item("Sunglasses", "accessory"),
//         new Item("Raincoat", "clothing")
//     ));
//     //**** */ Output: ["Jacket", "Raincoat"]
    
// }










// . Pet Feeding Schedule (Python)
// Category: Completion
// Problem:
// Write a function create_feeding_schedule(pet_type: str, current_time: str) -> str that generates a feeding schedule for a pet based on the type of pet ("dog", "cat", etc.) and the current time. Different pets have different feeding intervals, and the function should suggest when the next feeding is due.

// {

//     create_feeding_schedule("dog", "14:00")
// #*** Output: "Next feeding for your dog is at 18:00"

// }













// Workout Recommender (Python)
// Category: Completion
// Problem:
// Implement a function recommend_workout(fitness_level: str, available_time: int) -> str that recommends a workout based on a user's fitness level ("beginner", "intermediate", "advanced") and the amount of time they have available (in minutes). The function should return the name of an appropriate workout.

// {

//     recommend_workout("beginner", 30)
// #*** Output: "15-minute stretching, 15-minute walking"

// }



































// Problem 1
// Problem Statement:

// You are given a natural language statement that involves logical conditions using operators such as "if," "then," "and," "or," "not," and "if and only if." Your task is to convert this statement into propositional logic form, where each part of the statement (propositions) is mapped to a unique propositional variable (e.g., P, Q, R). The logical connectives should be converted to their respective propositional logic symbols.

// "if P then Q" <=> (P → Q)
// "P and Q" <=> (P ∧ Q)
// "P or Q" <=> (P ∨ Q)
// "not P" <=> (¬P)
// "P if and only if Q" <=> (P ↔ Q)
// Function Signature:

// python
// Copy code
// def convert_to_logic(s: str) -> str:
// Test Cases:
// Input: "If it is sunny then we will go to the park"
// Expected Output: (P → Q)

// Input: "It is cold and it is snowing"
// Expected Output: (P ∧ Q)

// Input: "The dog barks or the cat meows"
// Expected Output: (P ∨ Q)

// Input: "Not all students passed the exam"
// Expected Output: (¬P)














// Problem 1
// Problem Statement:

// You are given a natural language statement that involves logical conditions using operators such as "if," "then," "and," "or," "not," and "if and only if." Your task is to convert this statement into propositional logic form, where each part of the statement is mapped to a unique propositional variable (e.g., P, Q, R). The logical connectives should be converted to their respective propositional logic symbols.

// "if P then Q" <=> (P → Q)
// "P and Q" <=> (P ∧ Q)
// "P or Q" <=> (P ∨ Q)
// "not P" <=> (¬P)
// "P if and only if Q" <=> (P ↔ Q)

// s = "If the light is on then the room is bright"
// OUTPUT: (P → Q)
// Explanation:

// P - The light is on
// Q - The room is bright
// Return "invalid input" for any invalid input.













// Problem 2
// Problem Statement:

// You are given a natural language statement involving logical conditions using operators such as "if," "then," "and," "or," "not," and "if and only if." Your task is to convert this statement into propositional logic form, where each part of the statement (propositions) is mapped to a unique propositional variable (e.g., P, Q, R). The logical connectives should be converted to their respective propositional logic symbols.

// "if P then Q" <=> (P → Q)
// "P and Q" <=> (P ∧ Q)
// "P or Q" <=> (P ∨ Q)
// "not P" <=> (¬P)
// "P if and only if Q" <=> (P ↔ Q)

// Example:
// s = "If the alarm is ringing or the door is open then there is a security breach"
// OUTPUT: (P ∨ Q → R)
// Explanation:

// P - The alarm is ringing
// Q - The door is open
// R - There is a security breach
// Return "invalid input" for any invalid input.














// Problem 1
// Problem Statement:

// You are tasked with translating statements about animals into propositional logic. Each statement involves logical relationships using "is," "has," and "is not." Convert the statements into propositional logic, assigning unique variables for each proposition.

// "A is a mammal" <=> (P)
// "A has fur" <=> (Q)
// "A is not a reptile" <=> (¬R)

// Test Cases:

// Input: "A is a mammal and A has fur"
// Expected Output: (P ∧ Q)

// Input: "If A is a mammal, then A is not a reptile"
// Expected Output: (P → ¬R)

// Input: "A is a mammal or A is not a bird"
// Expected Output: (P ∨ ¬S)

// Input: "A is not a reptile and A has fur"
// Expected Output: (¬R ∧ Q)


























// Problem 2
// Problem Statement:

// You are given statements about a school environment using terms like "attends," "passes," "fails," and "is present." Convert these statements into propositional logic form, with unique variables for each proposition.

// "Student attends class" <=> (P)
// "Student passes exam" <=> (Q)
// "Student fails exam" <=> (R)

// Test Cases:

// Input: "If the student attends class, then they pass the exam"
// Expected Output: (P → Q)

// Input: "The student attends class and is present"
// Expected Output: (P ∧ S)

// Input: "The student fails the exam or they pass"
// Expected Output: (R ∨ Q)

// Input: "If the student is present, then they do not fail"
// Expected Output: (S → ¬R)











// You are given statements about a fruit basket using terms like "contains," "is ripe," and "is fresh." Convert these statements into propositional logic form, assigning unique variables for each proposition.

// "Basket contains apples" <=> (P)
// "Apples are ripe" <=> (Q)
// "Apples are fresh" <=> (R)

// Test Cases:

// Input: "The basket contains apples and apples are ripe"
// Expected Output: (P ∧ Q)

// Input: "If the basket contains apples, then they are fresh"
// Expected Output: (P → R)

// Input: "The basket does not contain oranges or apples are fresh"
// Expected Output: (¬O ∨ R)

// Input: "If apples are not ripe, then the basket is not fresh"
// Expected Output: (¬Q → ¬R)


















// Problem 1
// Problem Statement:

// You are given statements about a fruit basket using terms like "contains," "is ripe," and "is fresh." Convert these statements into propositional logic form, assigning unique variables for each proposition.

// "Basket contains apples" <=> (P)
// "Apples are ripe" <=> (Q)
// "Apples are fresh" <=> (R)

// Test Cases:

// Input: "The basket contains apples and apples are ripe"
// Expected Output: (P ∧ Q)

// Input: "If the basket contains apples, then they are fresh"
// Expected Output: (P → R)

// Input: "The basket does not contain oranges or apples are fresh"
// Expected Output: (¬O ∨ R)

// Input: "If apples are not ripe, then the basket is not fresh"
// Expected Output: (¬Q → ¬R)











// Problem 2
// Problem Statement:

// You are given statements about a car using terms like "is running," "has fuel," and "is maintained." Convert these statements into propositional logic form.

// "Car is running" <=> (P)
// "Car has fuel" <=> (Q)
// "Car is maintained" <=> (R)
// Function Signature:

// python
// Copy code
// def car_logic_conversion(s: str) -> str:
// Test Cases:

// Input: "If the car has fuel, then it is running"
// Expected Output: (Q → P)

// Input: "The car is running and it is maintained"
// Expected Output: (P ∧ R)

// Input: "The car is not running unless it has fuel"
// Expected Output: (¬P → ¬Q)

// Input: "If the car is maintained, then it has fuel or is running"
// Expected Output: (R → (Q ∨ P))









// You are given statements about a car using terms like "is running," "has fuel," and "is maintained." Convert these statements into propositional logic form.

// "Car is running" <=> (P)
// "Car has fuel" <=> (Q)
// "Car is maintained" <=> (R)
// Function Signature:

// python
// Copy code
// def car_logic_conversion(s: str) -> str:
// Test Cases:

// Input: "If the car has fuel, then it is running"
// Expected Output: (Q → P)

// Input: "The car is running and it is maintained"
// Expected Output: (P ∧ R)

// Input: "The car is not running unless it has fuel"
// Expected Output: (¬P → ¬Q)

// Input: "If the car is maintained, then it has fuel or is running"
// Expected Output: (R → (Q ∨ P))














// Sure! Here are eight medium-level problems, each with a unique context and logical structure:

// Problem 1
// Problem Statement:

// You are given statements about a fruit basket using terms like "contains," "is ripe," and "is fresh." Convert these statements into propositional logic form, assigning unique variables for each proposition.

// "Basket contains apples" <=> (P)
// "Apples are ripe" <=> (Q)
// "Apples are fresh" <=> (R)
// Function Signature:

// python
// Copy code
// def fruit_basket_logic(s: str) -> str:
// Test Cases:

// Input: "The basket contains apples and apples are ripe"
// Expected Output: (P ∧ Q)

// Input: "If the basket contains apples, then they are fresh"
// Expected Output: (P → R)

// Input: "The basket does not contain oranges or apples are fresh"
// Expected Output: (¬O ∨ R)

// Input: "If apples are not ripe, then the basket is not fresh"
// Expected Output: (¬Q → ¬R)

// Problem 2
// Problem Statement:

// You are given statements about a car using terms like "is running," "has fuel," and "is maintained." Convert these statements into propositional logic form.

// "Car is running" <=> (P)
// "Car has fuel" <=> (Q)
// "Car is maintained" <=> (R)
// Function Signature:

// python
// Copy code
// def car_logic_conversion(s: str) -> str:
// Test Cases:

// Input: "If the car has fuel, then it is running"
// Expected Output: (Q → P)

// Input: "The car is running and it is maintained"
// Expected Output: (P ∧ R)

// Input: "The car is not running unless it has fuel"
// Expected Output: (¬P → ¬Q)

// Input: "If the car is maintained, then it has fuel or is running"
// Expected Output: (R → (Q ∨ P))

// Problem 3
// Problem Statement:

// You are given statements about a student’s performance using terms like "studies," "passes," and "is prepared." Convert these statements into propositional logic form.

// "Student studies" <=> (P)
// "Student passes" <=> (Q)
// "Student is prepared" <=> (R)
// Function Signature:

// python
// Copy code
// def student_performance_logic(s: str) -> str:
// Test Cases:

// Input: "If the student studies, then they will pass"
// Expected Output: (P → Q)

// Input: "The student studies and is prepared"
// Expected Output: (P ∧ R)

// Input: "The student does not pass if they are not prepared"
// Expected Output: (¬R → ¬Q)

// Input: "If the student passes, they have studied or are prepared"
// Expected Output: (Q → (P ∨ R))


















// Problem 4
// Problem Statement:

// You are given statements about a restaurant menu using terms like "has vegetarian options," "is popular," and "is open." Convert these statements into propositional logic form.

// "Restaurant has vegetarian options" <=> (P)
// "Restaurant is popular" <=> (Q)
// "Restaurant is open" <=> (R)
// Function Signature:

// python
// Copy code
// def restaurant_menu_logic(s: str) -> str:
// Test Cases:

// Input: "If the restaurant is popular, then it has vegetarian options"
// Expected Output: (Q → P)

// Input: "The restaurant is open and has vegetarian options"
// Expected Output: (R ∧ P)

// Input: "The restaurant is not popular unless it is open"
// Expected Output: (¬R → ¬Q)

// Input: "If the restaurant has vegetarian options, it is popular or open"
// Expected Output: (P → (Q ∨ R))















// Problem 5
// Problem Statement:

// You are given statements about a computer using terms like "is running," "has software," and "is connected to the internet." Convert these statements into propositional logic form.

// "Computer is running" <=> (P)
// "Computer has software" <=> (Q)
// "Computer is connected to the internet" <=> (R)
// Function Signature:

// python
// Copy code
// def computer_logic_conversion(s: str) -> str:
// Test Cases:

// Input: "If the computer is running, then it has software"
// Expected Output: (P → Q)

// Input: "The computer is running and connected to the internet"
// Expected Output: (P ∧ R)

// Input: "The computer is not connected to the internet unless it has software"
// Expected Output: (¬R → ¬Q)

// Input: "If the computer has software, then it is running or connected"
// Expected Output: (Q → (P ∨ R))
























// Problem 6
// Problem Statement:

// You are given statements about a fitness regimen using terms like "exercises," "eats healthy," and "loses weight." Convert these statements into propositional logic form.

// "Person exercises" <=> (P)
// "Person eats healthy" <=> (Q)
// "Person loses weight" <=> (R)
// Function Signature:

// python
// Copy code
// def fitness_logic_conversion(s: str) -> str:
// Test Cases:

// Input: "If the person exercises, then they lose weight"
// Expected Output: (P → R)

// Input: "The person exercises and eats healthy"
// Expected Output: (P ∧ Q)

// Input: "The person does not lose weight unless they eat healthy"
// Expected Output: (¬Q → ¬R)

// Input: "If the person eats healthy, they exercise or lose weight"
// Expected Output: (Q → (P ∨ R))




















// Problem 7
// Problem Statement:

// You are given statements about a movie using terms like "is entertaining," "has good reviews," and "is worth watching." Convert these statements into propositional logic form.

// "Movie is entertaining" <=> (P)
// "Movie has good reviews" <=> (Q)
// "Movie is worth watching" <=> (R)
// Function Signature:

// python
// Copy code
// def movie_logic_conversion(s: str) -> str:
// Test Cases:

// Input: "If the movie is entertaining, then it has good reviews"
// Expected Output: (P → Q)

// Input: "The movie is entertaining and worth watching"
// Expected Output: (P ∧ R)

// Input: "The movie is not worth watching unless it has good reviews"
// Expected Output: (¬Q → ¬R)

// Input: "If the movie has good reviews, then it is entertaining or worth watching"
// Expected Output: (Q → (P ∨ R))

















// Problem 8
// Problem Statement:

// You are given statements about a tech gadget using terms like "works well," "is user-friendly," and "has good battery life." Convert these statements into propositional logic form.

// "Gadget works well" <=> (P)
// "Gadget is user-friendly" <=> (Q)
// "Gadget has good battery life" <=> (R)
// Function Signature:

// python
// Copy code
// def gadget_logic_conversion(s: str) -> str:
// Test Cases:

// Input: "If the gadget works well, then it is user-friendly"
// Expected Output: (P → Q)

// Input: "The gadget works well and has good battery life"
// Expected Output: (P ∧ R)

// Input: "The gadget is not user-friendly unless it works well"
// Expected Output: (¬P → ¬Q)

// Input: "If the gadget has good battery life, then it works well or is user-friendly"
// Expected Output: (R → (P ∨ Q))










































// 1  Revealing the Hidden Faces


// awwal, the playful dice, loves to roll around and have fun. However, he sometimes gets tired and only wants to show a few of his faces. To keep the game interesting, he rolls half of his sides at home and leaves the rest blank. We create a function, `daicy-faces`, that takes him half-shown faces and completes them. If awwal has no faces to show, the function gives us a cheerful message saying he’s ready to play!



// 2

// Drey, the curious dice, loves playing games but gets bored easily. So, she only rolls a few faces at a time during play. To keep things exciting, Drey has a special trick: she shows half of her faces while playing and keeps the rest hidden until later. Your task is to create a function called `Drey_faces` in Python. This function will take a list of lists (a matrix) representing Daisy’s half-shown faces and complete them. If Daisy isn’t showing any faces at all, the function should return [["No Faces to Show"]]. Can you help Drey with her game?






















































































































































































































// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import "../../Women/WomenShoes/OnlyWomenShoe.scss"
// import { MdOutlineStarPurple500 } from "react-icons/md";
// import { IoStarHalfOutline } from "react-icons/io5";
// import { MdAddShoppingCart } from "react-icons/md";

// const Onlymenshoe = () => {
    
//     const [OnlyWomen, setOnlyWomen] = useState([])
//     const [reload, setreload] = useState(false)
//     useEffect(() => {
//       axios.get("http://localhost:7777/admin/Menshoes")
//         .then((res) => {
//           setOnlyWomen(res.data.products)
//           setreload(true)
//           console.log(OnlyWomen);
//         }).catch((err) => {
//           console.log(err);
//           setreload(false)
//         })
//     }, [reload])
//     return (
  
//       <>
  
//         <div className="onlyWomen">
//           {OnlyWomen.map((Women, i) => (
//             <div className='eachPrd'>
//               <img src={Women.productimage} width={"360px"} height={"360px"} style={{borderRadius:"8px"}}/>
//               <div className='cartbag'>
//                 <button className='col-6 btn btn-primary'><MdAddShoppingCart size={"35px"}/></button>
//               </div>
  
//               <div className="stars">
  
//                 <div className='pricedescr'>
//                   <p>{Women.productdescription}</p>
//                   <p style={{ fontSize: "18px", fontWeight: "400" }}>{Women.productprice}</p>
//                 </div>
  
//                 <div>
//                   <span><MdOutlineStarPurple500 /></span>
//                   <span><MdOutlineStarPurple500 /></span>
//                   <span><MdOutlineStarPurple500 /></span>
//                   <span><MdOutlineStarPurple500 /></span>
//                   <span><IoStarHalfOutline /></span>
//                 </div>
  
//               </div>
//             </div>
  
//           ))}
//         </div>
  
//       </>
//     )
//   }

// export default Onlymenshoe
















// {Addition}

// Category: Binary Tree Traversal

// Problem: In a magical town, help kitties find the total number of viable exits from a binary maze, where only paths with nodes in ascending order of values are allowed.
// Category: Interval Intersection

// Problem: Write a function to find the number of non-intersecting interval pairs from a list of integer intervals.
// Category: Geometrical Probability

// Problem: Compute the probability that a randomly chosen point inside a bounding box lies within a given polygon.
// Category: Combination Lock Puzzle

// Problem: Solve a complex combination lock puzzle where rotating wheels are linked in non-trivial ways, and find the minimum steps required to unlock the combination.
// Category: Dynamic AoE Spell Optimization

// Problem: Create an algorithm for casting a dynamic AoE spell on a grid battlefield, where the goal is to maximize enemy hits while minimizing allies' damage. The spell should dynamically adjust its shape based on obstacles.

















// How can I implement a system in a food delivery app where I can log in with my  username and password, set up a notifications for order updates, and where i can also place multiple food orders simultanously? The system should wait for specific confirmations that is related to each order, ignoring all irrelevant notifications.

// Specifically, when I place an order (example, a burger with special requests), I want to call a function that sends the order and waits for a confirmation message like {Order: Burger, Status: Delivered}. if received, the system should litteraly clear both the order request and the confirmation from the notification list. How can I ensure that each order is handled independently and efficiently?





// // base code 



// let orders = {};
// let notifications = [];
// let loggedIn = false;

// // representing the username and password input tag with a string
// // assuming what is inputed in the password and username input tag are
// "password input tag" = "pass"
// "username input tag" = "user"

// function login(username, password) {
// //verify a login process
//     if (username === "user" && password === "pass") {
//         loggedIn = true;
//         console.log("Login sucessfull!");
//     } else {
//         console.log("Login failed!");
//     }
// }

// function placeOrder(orderId, foodItem, specialRequests) {
//     if (!loggedIn) {
//         console.log("Please log in to place an order.");
//         return;
//     }
//       // Create and store the order

//     else{
//         const order = { foodItem: foodItem, specialRequests: specialRequests || null };
//         orders[orderId] = order;
//         notifications.push(`Order placed: ${orderId}`);
//         console.log(`Order ${orderId} for ${foodItem} placed.`);
//     }

  

// }

// function receiveNotification(message) {
//     notifications.push(message);
//     console.log(`Notification received: ${message}`);
// }

// function checkNotifications() {
//     notifications.forEach((notification) => {
//         Object.keys(orders).forEach((orderId) => {
//             if (notification.includes(`Order delivered: ${orderId}`)) {
//                 console.log(`Confirmation received for order ${orderId}.`);
//                 delete orders[orderId];
//                 notifications = notifications.filter(eachnotification => eachnotification !== notification);
//             }
//         });
//     });
// }




 


// // test case 2

// //  Successful Login and Order Placement
// function testLoginAndPlaceOrder() {
//     login("user", "pass");
//     placeOrder(1, "Burger", "no onions");

//     // using ternary operator for confirmation

//     console.log(loggedIn ? "Test 1 Passed: User logged in" : "Test 1 Failed: Login failed");
//     console.log(orders[1] ? `Test 1 Passed: Order placed for ${orders[1].foodItem}` : "Test 1 Failed: Order not placed");
//     console.log(notifications.includes("Order placed: 1") ? "Test 1 Passed: Notification added" : "Test 1 Failed: Notification missing");
// }

// //  Failed Login and Order Placement Attempt
// function testFailedLoginAndOrderPlacement() {
//     login("user", "wrongpassword");
//     placeOrder(2, "Pizza", "extra cheese");

//     // using ternary operator for confirmation

//     console.log(!loggedIn ? "Test 2 Passed: Login failed as expected" : "Test 2 Failed: User should not be logged in");
//     console.log(Object.keys(orders).length === 0 ? "Test 2 Passed: No order placed" : "Test 2 Failed: Order should not be placed");
//     console.log(notifications.length === 0 ? "Test 2 Passed: No notifications" : "Test 2 Failed: Notification should not exist");
// }

// //  Receiving Notifications and Acknowledging Orders
// function testReceivingNotificationAndAcknowledgment() {
//     login("user", "pass");
//     placeOrder(3, "Sushi", "no wasabi");
//     receiveNotification("Order delivered: 3");
//     checkNotifications();

//   // using ternary operator for confirmation

//     console.log(Object.keys(orders).length === 0 ? "Test 3 Passed: Order acknowledged and removed" : "Test 3 Failed: Order not removed");
//     console.log(!notifications.includes('Order delivered: 3') ? "Test 3 Passed: Notification removed" : "Test 3 Failed: Notification still exists");
// }

// // calling all test cases function
// testLoginAndPlaceOrder();
// testFailedLoginAndOrderPlacement();
// testReceivingNotificationAndAcknowledgment();












