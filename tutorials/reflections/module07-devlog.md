# Module 07 Devlog

## Proof of Completion
Provide a minimum of two screenshots OR one short GIF (under 10 seconds) demonstrating the completed work running in your Codespace.
<br><br>

#1
![Image Alt Text](../img/tut7/t07proof.gif) 

()
<br><br>
***Description:*** *Created a component 'Header'*
<br><br>


**Extension task completed successfully:** [Yes / No]
YES

<br><br>


## Concept Mapping

Identify the specific theoretical concepts from this week’s lectures that you applied to solve the practical work for this week.

**Concept 1: Mongoose connection logic (async/await with try/catch)** *[Lecture slide number: 12]* 
<br><br>

**Implementation:** 
Connecting to MongoDB is an asynchronous network operation. connectDB waits for mongoose.connect() inside a try/catch. If the connection fails, it exits the process rather thatn leaving a running server with no database. 
<br><br>


*(Code snippet)*
![Image Alt Text](../img/tut7/t07cm1.png) 
<br><br>

**Concept 2: Schema validation with custom error messages, defaults and unique** *[Lecture slide number: 17]* 
<br><br>

**Implementation:** 
In models/user.js, the user schema used required: [true, "message"] to enforce mandatory fields with a readable error. It used unique: true to block duplicate emails and default to fill in role automatically. The duplicate-email E11000 error seen when re-sending the request came from unique: true 
<br><br>


*(Code snippet)*
![Image Alt Text](../img/tut7/t07cm2.png) 
<br><br>



## AI Transparency and Critical Reflection

Detail how Generative AI was used during this lab.

**Table 1: AI Tool Usage Log**

| AI tool used    | Purpose                            | Prompt used                                           | Did you use the output "as is" or modify it? How?                        |
| :-------------- | :--------------------------------- | :---------------------------------------------------- | :----------------------------------------------------------------------- |
|  | |  |


<br><br>


## Analysis and Implications

In 2-3 sentences, reflect on the implications of AI assistance that you received this week. Consider academic integrity, security, or whether the AI obscured your understanding of the core concept.
<br><br>

**Reflection:**  
<br><br>

