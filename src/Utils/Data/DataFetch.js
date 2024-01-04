// store.js

import { createStore } from 'redux';
import localforage from 'localforage';

const initialState = {
  emails:[
    {
      "id": 1,
      "sender": "john.doe@example.com",
      "recipient": "alice.smith@example.com",
      "subject": "Meeting Tomorrow",
      "body": "Hi Alice, Let's meet tomorrow at 10 AM to discuss the project.",
      "timestamp": "2023-12-13T09:30:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "John Doe",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 2,
      "sender": "mary.jones@example.com",
      "recipient": "bob.jenkins@example.com",
      "subject": "Reminder: Project Deadline",
      "body": "Hi Bob, Just a friendly reminder that the project deadline is approaching. Let's make sure everything is on track.",
      "timestamp": "2023-12-12T15:45:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Mary Jones",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 3,
      "sender": "robert.smith@example.com",
      "recipient": "susan.wilson@example.com",
      "subject": "Conference Call Agenda",
      "body": "Hi Susan, Attached is the agenda for our upcoming conference call. Please review it before the meeting.",
      "timestamp": "2023-12-11T14:20:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Robert Smith",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 4,
      "sender": "linda.johnson@example.com",
      "recipient": "michael.davis@example.com",
      "subject": "Travel Itinerary",
      "body": "Hi Michael, I've attached the travel itinerary for our upcoming business trip. Let me know if it looks good to you.",
      "timestamp": "2023-12-10T11:55:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Linda Johnson",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 5,
      "sender": "steven.miller@example.com",
      "recipient": "jennifer.white@example.com",
      "subject": "Project Status Update",
      "body": "Hi Jennifer, Here's the latest update on our project. Everything is progressing well.",
      "timestamp": "2023-12-09T16:40:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Steven Miller",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 6,
      "sender": "emily.brown@example.com",
      "recipient": "ryan.carter@example.com",
      "subject": "Job Interview Confirmation",
      "body": "Hi Ryan, Thank you for confirming your job interview scheduled for next week. We look forward to meeting you.",
      "timestamp": "2023-12-08T10:15:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Emily Brown",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 7,
      "sender": "jason.roberts@example.com",
      "recipient": "amanda.garcia@example.com",
      "subject": "Weekend Plans",
      "body": "Hi Amanda, Any plans for the weekend? I was thinking of grabbing lunch on Saturday. Let me know if you're interested.",
      "timestamp": "2023-12-07T13:30:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Jason Roberts",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 8,
      "sender": "sarah.anderson@example.com",
      "recipient": "kevin.martin@example.com",
      "subject": "Important Announcement",
      "body": "Hi Kevin, Please read the attached document for an important announcement regarding our company.",
      "timestamp": "2023-12-06T17:00:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Sarah Anderson",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 9,
      "sender": "mark.taylor@example.com",
      "recipient": "jessica.moore@example.com",
      "subject": "Hiking Trip Details",
      "body": "Hi Jessica, Here are the details for our upcoming hiking trip. Make sure to pack accordingly.",
      "timestamp": "2023-12-05T09:45:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Mark Taylor",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 10,
      "sender": "olivia.clark@example.com",
      "recipient": "daniel.wilson@example.com",
      "subject": "New Project Kickoff",
      "body": "Hi Daniel, Our new project is kicking off next week. Let's schedule a meeting to discuss the details.",
      "timestamp": "2023-12-04T14:20:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Olivia Clark",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 11,
      "sender": "nathan.cooper@example.com",
      "recipient": "amy.rodriguez@example.com",
      "subject": "Product Launch Announcement",
      "body": "Hi Amy, We're excited to announce the launch of our new product. Check out the details in the attached document.",
      "timestamp": "2023-12-03T11:55:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Nathan Cooper",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 12,
      "sender": "laura.hall@example.com",
      "recipient": "charles.lee@example.com",
      "subject": "Family Reunion",
      "body": "Hi Charles, The family reunion is coming up. Let's coordinate travel plans and make it a memorable event.",
      "timestamp": "2023-12-02T16:40:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Laura Hall",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 13,
      "sender": "brian.rogers@example.com",
      "recipient": "karen.martin@example.com",
      "subject": "Weekly Report",
      "body": "Hi Karen, Please find attached the weekly report. Let me know if you have any questions.",
      "timestamp": "2023-12-01T10:15:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Brian Rogers",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 14,
      "sender": "victor.nguyen@example.com",
      "recipient": "julie.jenkins@example.com",
      "subject": "Team Building Event",
      "body": "Hi Julie, Our team building event is scheduled for next month. Save the date!",
      "timestamp": "2023-11-30T13:30:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Victor Nguyen",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 15,
      "sender": "rachel.carter@example.com",
      "recipient": "peter.thomas@example.com",
      "subject": "Vacation Plans",
      "body": "Hi Peter, Let's discuss our vacation plans for the upcoming holidays. I'm thinking of a beach destination.",
      "timestamp": "2023-11-29T17:00:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Rachel Carter",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 16,
      "sender": "eric.wilson@example.com",
      "recipient": "natalie.jackson@example.com",
      "subject": "Training Workshop Registration",
      "body": "Hi Natalie, Please confirm your registration for the upcoming training workshop by replying to this email.",
      "timestamp": "2023-11-28T09:45:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Eric Wilson",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 17,
      "sender": "megan.morris@example.com",
      "recipient": "derek.hughes@example.com",
      "subject": "Birthday Celebration",
      "body": "Hi Derek, Let's plan something special for Megan's birthday. Any ideas?",
      "timestamp": "2023-11-27T14:20:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Megan Morris",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 18,
      "sender": "gregory.turner@example.com",
      "recipient": "sandra.cook@example.com",
      "subject": "Client Meeting Recap",
      "body": "Hi Sandra, Here's a recap of our recent client meeting. Please review and provide any additional insights.",
      "timestamp": "2023-11-26T11:55:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Gregory Turner",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 19,
      "sender": "carolyn.hill@example.com",
      "recipient": "ryan.parker@example.com",
      "subject": "Job Offer",
      "body": "Hi Ryan, We are pleased to extend a job offer to you. Please review the attached details and let us know your decision.",
      "timestamp": "2023-11-25T16:40:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Carolyn Hill",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 20,
      "sender": "nicholas.ross@example.com",
      "recipient": "olivia.young@example.com",
      "subject": "Weekend Getaway",
      "body": "Hi Olivia, How about a weekend getaway to the mountains? It will be a great escape from the city.",
      "timestamp": "2023-11-24T10:15:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Nicholas Ross",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 21,
      "sender": "angela.ward@example.com",
      "recipient": "dennis.brooks@example.com",
      "subject": "Project Collaboration",
      "body": "Hi Dennis, I'm reaching out to discuss the possibility of collaborating on a new project. Let me know your thoughts.",
      "timestamp": "2023-11-23T13:30:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Angela Ward",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 22,
      "sender": "justin.mitchell@example.com",
      "recipient": "cheryl.allen@example.com",
      "subject": "Team Lunch",
      "body": "Hi Cheryl, Let's plan a team lunch this Friday to celebrate our recent success. Any restaurant preferences?",
      "timestamp": "2023-11-22T17:00:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Justin Mitchell",
      "security": "encrypted",
      "starred": false
    },
    {
      "id": 23,
      "sender": "hannah.richardson@example.com",
      "recipient": "kyle.hall@example.com",
      "subject": "Client Feedback Request",
      "body": "Hi Kyle, We are seeking feedback from our clients. Please share your thoughts and suggestions to improve our services.",
      "timestamp": "2023-11-21T09:45:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Hannah Richardson",
      "security": "encrypted",
      "starred": true
    },
    {
      "id": 24,
      "sender": "michael.sullivan@example.com",
      "recipient": "gina.stewart@example.com",
      "subject": "Job Application Status",
      "body": "Hi Gina, I wanted to follow up on my job application. Can you provide an update on the current status?",
      "timestamp": "2023-11-20T14:20:00",
      "mailed_by": "smtp.example.com",
      "signed_by": "Michael Sullivan",
      "security": "encrypted",
      "starred": false
    },
    {
          "id": 126,
          "sender": "olivia.martin@example.com",
          "recipient": "peter.wilson@example.com",
          "subject": "Product Launch Announcement",
          "body": "Hi Peter, We're excited to announce the launch of our new product. Check out the details attached!",
          "timestamp": "2023-12-09T11:45:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Olivia Martin",
          "security": "encrypted",
          "starred": false
    },
    {
          "id": 127,
          "sender": "adam.jenkins@example.com",
          "recipient": "susan.davis@example.com",
          "subject": "Weekly Project Update",
          "body": "Hi Susan, Here's the weekly update on our ongoing project. Please review and provide feedback.",
          "timestamp": "2023-12-08T14:30:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Adam Jenkins",
          "security": "encrypted",
          "starred": true
        },
    {
          "id": 128,
          "sender": "linda.smith@example.com",
          "recipient": "robert.white@example.com",
          "subject": "Invitation to Team Lunch",
          "body": "Hi Robert, We're organizing a team lunch next week. Please confirm your availability.",
          "timestamp": "2023-12-07T12:15:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Linda Smith",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 129,
          "sender": "steve.anderson@example.com",
          "recipient": "jennifer.moore@example.com",
          "subject": "Request for Collaboration",
          "body": "Hi Jennifer, I would like to discuss a potential collaboration opportunity. Are you available for a meeting?",
          "timestamp": "2023-12-06T16:20:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Steve Anderson",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 130,
          "sender": "natalie.carter@example.com",
          "recipient": "michael.brown@example.com",
          "subject": "Vacation Approval",
          "body": "Hi Michael, I've approved your vacation request. Enjoy your time off!",
          "timestamp": "2023-12-05T10:30:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Natalie Carter",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 131,
          "sender": "ryan.clark@example.com",
          "recipient": "jessica.miller@example.com",
          "subject": "Project Kickoff Meeting",
          "body": "Hi Jessica, Let's schedule a meeting to kick off the new project. What times work for you?",
          "timestamp": "2023-12-04T13:45:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Ryan Clark",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 132,
          "sender": "sophia.jones@example.com",
          "recipient": "kevin.smith@example.com",
          "subject": "Document Review Request",
          "body": "Hi Kevin, I need your input on the document attached. Please review at your earliest convenience.",
          "timestamp": "2023-12-03T09:15:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Sophia Jones",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 133,
          "sender": "michael.adams@example.com",
          "recipient": "karen.martin@example.com",
          "subject": "Congratulations!",
          "body": "Hi Karen, Congratulations on your recent achievements. Well deserved!",
          "timestamp": "2023-12-02T17:00:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Michael Adams",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 134,
          "sender": "emma.white@example.com",
          "recipient": "jason.evans@example.com",
          "subject": "Team Building Event",
          "body": "Hi Jason, We're organizing a team-building event next month. Save the date!",
          "timestamp": "2023-12-01T14:50:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Emma White",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 135,
          "sender": "daniel.roberts@example.com",
          "recipient": "lisa.jenkins@example.com",
          "subject": "Feedback Request",
          "body": "Hi Lisa, I would appreciate your feedback on the recent project. Let's schedule a feedback session.",
          "timestamp": "2023-11-30T11:25:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Daniel Roberts",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 136,
          "sender": "sarah.mitchell@example.com",
          "recipient": "james.wilson@example.com",
          "subject": "Holiday Greetings",
          "body": "Hi James, Wishing you and your family a joyful holiday season!",
          "timestamp": "2023-11-29T09:40:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Sarah Mitchell",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 137,
          "sender": "nathan.cooper@example.com",
          "recipient": "ashley.baker@example.com",
          "subject": "New Project Proposal",
          "body": "Hi Ashley, I've prepared a proposal for the new project. Let's discuss it in our next meeting.",
          "timestamp": "2023-11-28T14:15:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Nathan Cooper",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 138,
          "sender": "victor.hill@example.com",
          "recipient": "linda.davis@example.com",
          "subject": "Meeting Agenda",
          "body": "Hi Linda, Here's the agenda for our upcoming meeting. Please review it before the session.",
          "timestamp": "2023-11-27T16:30:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Victor Hill",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 139,
          "sender": "julie.ward@example.com",
          "recipient": "chris.jackson@example.com",
          "subject": "Collaboration Opportunity",
          "body": "Hi Chris, I came across a potential collaboration opportunity that aligns with our goals. Let's discuss.",
          "timestamp": "2023-11-26T10:20:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Julie Ward",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 140,
          "sender": "brian.carter@example.com",
          "recipient": "rachel.rogers@example.com",
          "subject": "Training Session Schedule",
          "body": "Hi Rachel, Attached is the schedule for the upcoming training sessions. Please share it with your team.",
          "timestamp": "2023-11-25T11:55:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Brian Carter",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 141,
          "sender": "jennifer.cooper@example.com",
          "recipient": "john.mitchell@example.com",
          "subject": "Congratulations on Promotion",
          "body": "Hi John, Congratulations on your well-deserved promotion! Wishing you continued success.",
          "timestamp": "2023-11-24T15:10:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Jennifer Cooper",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 142,
          "sender": "paul.morris@example.com",
          "recipient": "emma.brown@example.com",
          "subject": "Upcoming Event Invitation",
          "body": "Hi Emma, You're invited to our upcoming networking event. Save the date and RSVP!",
          "timestamp": "2023-11-23T12:40:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Paul Morris",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 143,
          "sender": "caroline.jenkins@example.com",
          "recipient": "george.smith@example.com",
          "subject": "Quarterly Financial Report",
          "body": "Hi George, Attached is the quarterly financial report. Please review and provide your insights.",
          "timestamp": "2023-11-22T09:25:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Caroline Jenkins",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 144,
          "sender": "charlie.brown@example.com",
          "recipient": "olivia.martin@example.com",
          "subject": "Project Feedback Session",
          "body": "Hi Olivia, Let's schedule a feedback session for the recent project. Your input is valuable.",
          "timestamp": "2023-11-21T16:00:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Charlie Brown",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 145,
          "sender": "lucas.hill@example.com",
          "recipient": "megan.carter@example.com",
          "subject": "Important Announcement",
          "body": "Hi Megan, We have an important announcement to share with the team. Please read the attached document.",
          "timestamp": "2023-11-20T11:30:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Lucas Hill",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 146,
          "sender": "maria.evans@example.com",
          "recipient": "nathan.smith@example.com",
          "subject": "Team Building Survey",
          "body": "Hi Nathan, Please take a moment to complete the team-building survey. Your feedback is valuable.",
          "timestamp": "2023-11-19T14:15:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Maria Evans",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 147,
          "sender": "jacob.anderson@example.com",
          "recipient": "ava.jones@example.com",
          "subject": "Project Milestone Achieved",
          "body": "Hi Ava, I'm pleased to announce that we've achieved a significant project milestone. Thank you for your contribution.",
          "timestamp": "2023-11-18T09:50:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Jacob Anderson",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 148,
          "sender": "samantha.morris@example.com",
          "recipient": "noah.mitchell@example.com",
          "subject": "New Employee Onboarding",
          "body": "Hi Noah, We have a new employee joining. Please assist with the onboarding process.",
          "timestamp": "2023-11-17T13:20:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Samantha Morris",
          "security": "encrypted",
          "starred": false
        },
        {
          "id": 149,
          "sender": "dylan.rogers@example.com",
          "recipient": "mia.baker@example.com",
          "subject": "Meeting Rescheduled",
          "body": "Hi Mia, Due to unforeseen circumstances, we need to reschedule our upcoming meeting. Please check the updated time.",
          "timestamp": "2023-11-16T16:45:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Dylan Rogers",
          "security": "encrypted",
          "starred": true
        },
        {
          "id": 150,
          "sender": "eva.wilson@example.com",
          "recipient": "logan.carter@example.com",
          "subject": "Holiday Office Closure",
          "body": "Hi Logan, Our office will be closed during the upcoming holidays. Please plan accordingly.",
          "timestamp": "2023-11-15T10:10:00",
          "mailed_by": "smtp.example.com",
          "signed_by": "Eva Wilson",
          "security": "encrypted",
          "starred": false
        },
        {
              "id": 151,
              "sender": "connor.andrews@example.com",
              "recipient": "ava.thompson@example.com",
              "subject": "New Project Kickoff",
              "body": "Hi Ava, I'm excited to announce the kickoff of our new project. Let's discuss the key milestones.",
              "timestamp": "2023-11-14T15:30:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Connor Andrews",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 152,
              "sender": "hannah.johnson@example.com",
              "recipient": "mason.miller@example.com",
              "subject": "Team Appreciation Day",
              "body": "Hi Mason, In celebration of Team Appreciation Day, we have planned some special activities. Get ready for a fun day!",
              "timestamp": "2023-11-13T12:45:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Hannah Johnson",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 153,
              "sender": "andrew.evans@example.com",
              "recipient": "emma.jones@example.com",
              "subject": "Feedback on Proposal",
              "body": "Hi Emma, I've reviewed the proposal you sent. Let's schedule a meeting to discuss the feedback.",
              "timestamp": "2023-11-12T14:20:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Andrew Evans",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 154,
              "sender": "mia.jackson@example.com",
              "recipient": "noah.morris@example.com",
              "subject": "Important Update",
              "body": "Hi Noah, I wanted to provide you with an important update regarding the ongoing project. Please review the details attached.",
              "timestamp": "2023-11-11T09:55:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Mia Jackson",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 155,
              "sender": "david.mitchell@example.com",
              "recipient": "olivia.baker@example.com",
              "subject": "Conference Registration",
              "body": "Hi Olivia, Please complete the registration process for the upcoming industry conference. Your participation is valuable.",
              "timestamp": "2023-11-10T16:10:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "David Mitchell",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 156,
              "sender": "abigail.roberts@example.com",
              "recipient": "jacob.smith@example.com",
              "subject": "Request for Information",
              "body": "Hi Jacob, I'm seeking additional information on the recent project. Please provide the necessary details at your earliest convenience.",
              "timestamp": "2023-11-09T10:35:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Abigail Roberts",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 157,
              "sender": "ethan.wilson@example.com",
              "recipient": "sophia.cooper@example.com",
              "subject": "Congratulations on Anniversary",
              "body": "Hi Sophia, Congratulations on your work anniversary! Your dedication is truly appreciated.",
              "timestamp": "2023-11-08T14:50:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Ethan Wilson",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 158,
              "sender": "zoey.evans@example.com",
              "recipient": "logan.davis@example.com",
              "subject": "Project Status Report",
              "body": "Hi Logan, Attached is the latest project status report. Please review and provide any necessary updates.",
              "timestamp": "2023-11-07T09:15:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Zoey Evans",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 159,
              "sender": "gavin.smith@example.com",
              "recipient": "chloe.jones@example.com",
              "subject": "Team Meeting Agenda",
              "body": "Hi Chloe, Here's the agenda for our upcoming team meeting. Let me know if there are any additional items you'd like to discuss.",
              "timestamp": "2023-11-06T16:30:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Gavin Smith",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 160,
              "sender": "lily.miller@example.com",
              "recipient": "ryan.thompson@example.com",
              "subject": "Holiday Party Invitation",
              "body": "Hi Ryan, You're invited to our annual holiday party. Save the date for a night of celebration!",
              "timestamp": "2023-11-05T10:50:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Lily Miller",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 161,
              "sender": "jaxon.anderson@example.com",
              "recipient": "aubrey.roberts@example.com",
              "subject": "Feedback Request",
              "body": "Hi Aubrey, I'm seeking your feedback on the recent project. Your insights are valuable for improvement.",
              "timestamp": "2023-11-04T14:15:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Jaxon Anderson",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 162,
              "sender": "harper.evans@example.com",
              "recipient": "aiden.brown@example.com",
              "subject": "New Employee Introduction",
              "body": "Hi Aiden, Please join me in welcoming our new team member. Here's a brief introduction.",
              "timestamp": "2023-11-03T09:40:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Harper Evans",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 163,
              "sender": "carter.jones@example.com",
              "recipient": "mia.wilson@example.com",
              "subject": "Upcoming Training Session",
              "body": "Hi Mia, We have a training session scheduled for next week. Ensure your participation for valuable insights.",
              "timestamp": "2023-11-02T17:05:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Carter Jones",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 164,
              "sender": "madison.hill@example.com",
              "recipient": "ethan.rogers@example.com",
              "subject": "Project Collaboration Proposal",
              "body": "Hi Ethan, I'm proposing a collaboration on the upcoming project. Let's discuss the details further.",
              "timestamp": "2023-11-01T12:30:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Madison Hill",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 165,
              "sender": "owen.jenkins@example.com",
              "recipient": "zoey.baker@example.com",
              "subject": "Thank You for Your Contribution",
              "body": "Hi Zoey, Thank you for your outstanding contribution to the team. Your efforts are truly appreciated.",
              "timestamp": "2023-10-31T11:55:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Owen Jenkins",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 166,
              "sender": "elijah.martin@example.com",
              "recipient": "hazel.johnson@example.com",
              "subject": "New Project Proposal",
              "body": "Hi Hazel, I've prepared a detailed proposal for the new project. Let's schedule a meeting to discuss it further.",
              "timestamp": "2023-10-30T10:20:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Elijah Martin",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 167,
              "sender": "scarlett.thompson@example.com",
              "recipient": "liam.miller@example.com",
              "subject": "Weekly Progress Report",
              "body": "Hi Liam, Here's the weekly progress report for your review. Let me know if you have any questions.",
              "timestamp": "2023-10-29T09:45:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Scarlett Thompson",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 168,
              "sender": "luke.carter@example.com",
              "recipient": "emma.smith@example.com",
              "subject": "Invitation to Project Kickoff",
              "body": "Hi Emma, You're invited to the kickoff meeting for our upcoming project. Your presence is valuable.",
              "timestamp": "2023-10-28T15:10:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Luke Carter",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 169,
              "sender": "zoe.evans@example.com",
              "recipient": "jaxon.brown@example.com",
              "subject": "Important Announcement",
              "body": "Hi Jaxon, We have an important announcement to share with the team. Please read the attached document for details.",
              "timestamp": "2023-10-27T11:35:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Zoe Evans",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 170,
              "sender": "logan.mitchell@example.com",
              "recipient": "ava.wilson@example.com",
              "subject": "Training Workshop Registration",
              "body": "Hi Ava, Don't forget to register for the upcoming training workshop. Your participation is essential.",
              "timestamp": "2023-10-26T14:00:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Logan Mitchell",
              "security": "encrypted",
              "starred": false
            },
            {
              "id": 171,
              "sender": "ella.davis@example.com",
              "recipient": "noah.jones@example.com",
              "subject": "Project Update Meeting",
              "body": "Hi Noah, Let's schedule a meeting to provide updates on the ongoing project. Your input is valuable.",
              "timestamp": "2023-10-25T09:25:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "Ella Davis",
              "security": "encrypted",
              "starred": true
            },
            {
              "id": 172,
              "sender": "william.white@example.com",
              "recipient": "olivia.anderson@example.com",
              "subject": "Congratulations on Achievements",
              "body": "Hi Olivia, Congratulations on your recent achievements. Your hard work has not gone unnoticed.",
              "timestamp": "2023-10-24T16:50:00",
              "mailed_by": "smtp.example.com",
              "signed_by": "William White",
              "security": "encrypted",
              "starred": false
            },
                {
                  "id": 176,
                  "sender": "benjamin.jones@example.com",
                  "recipient": "violet.hill@example.com",
                  "subject": "Project Kickoff",
                  "body": "Hi Violet, Let's schedule a meeting to kick off the new project. I'm looking forward to your input.",
                  "timestamp": "2023-11-10T11:30:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Benjamin Jones",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 177,
                  "sender": "ella.miller@example.com",
                  "recipient": "ethan.martin@example.com",
                  "subject": "Employee Recognition",
                  "body": "Hi Ethan, Your hard work and dedication have not gone unnoticed. Congratulations on your outstanding performance!",
                  "timestamp": "2023-11-09T14:15:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Ella Miller",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 178,
                  "sender": "liam.mitchell@example.com",
                  "recipient": "scarlett.davis@example.com",
                  "subject": "Training Workshop Invitation",
                  "body": "Hi Scarlett, You're invited to our upcoming training workshop. Please confirm your attendance.",
                  "timestamp": "2023-11-08T12:40:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Liam Mitchell",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 179,
                  "sender": "aubrey.wilson@example.com",
                  "recipient": "owen.evans@example.com",
                  "subject": "Quarterly Review Meeting",
                  "body": "Hi Owen, Let's schedule a meeting to review the progress of our projects over the past quarter.",
                  "timestamp": "2023-11-07T16:00:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Aubrey Wilson",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 180,
                  "sender": "claire.carter@example.com",
                  "recipient": "jackson.smith@example.com",
                  "subject": "Feedback on Proposal",
                  "body": "Hi Jackson, I would appreciate your feedback on the proposal I sent earlier this week.",
                  "timestamp": "2023-11-06T10:30:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Claire Carter",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 181,
                  "sender": "nathan.anderson@example.com",
                  "recipient": "hannah.martin@example.com",
                  "subject": "Conference Registration Confirmation",
                  "body": "Hi Hannah, Your conference registration has been confirmed. We look forward to your participation.",
                  "timestamp": "2023-11-05T13:45:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Nathan Anderson",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 182,
                  "sender": "amelia.morris@example.com",
                  "recipient": "samuel.brown@example.com",
                  "subject": "Product Demo Request",
                  "body": "Hi Samuel, Could we schedule a product demo session to showcase the latest features?",
                  "timestamp": "2023-11-04T09:15:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Amelia Morris",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 183,
                  "sender": "logan.jenkins@example.com",
                  "recipient": "grace.taylor@example.com",
                  "subject": "Birthday Celebration",
                  "body": "Hi Grace, Wishing you a fantastic birthday! Let's celebrate together.",
                  "timestamp": "2023-11-03T17:00:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Logan Jenkins",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 184,
                  "sender": "leah.ward@example.com",
                  "recipient": "luke.cooper@example.com",
                  "subject": "Important Update",
                  "body": "Hi Luke, I wanted to share an important update regarding our upcoming project. Please review the details attached.",
                  "timestamp": "2023-11-02T14:50:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Leah Ward",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 185,
                  "sender": "jason.white@example.com",
                  "recipient": "mia.davis@example.com",
                  "subject": "Vacation Request Approval",
                  "body": "Hi Mia, I'm pleased to inform you that your vacation request has been approved. Enjoy your time off!",
                  "timestamp": "2023-11-01T11:25:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Jason White",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 186,
                  "sender": "zoey.baker@example.com",
                  "recipient": "ethan.evans@example.com",
                  "subject": "Collaboration Proposal",
                  "body": "Hi Ethan, I have a collaboration proposal that I believe aligns with our mutual interests. Let's discuss.",
                  "timestamp": "2023-10-31T09:40:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Zoey Baker",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 187,
                  "sender": "mason.mitchell@example.com",
                  "recipient": "olivia.hill@example.com",
                  "subject": "Congratulations on Graduation",
                  "body": "Hi Olivia, Congratulations on your graduation! Wishing you success in your future endeavors.",
                  "timestamp": "2023-10-30T14:15:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Mason Mitchell",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 188,
                  "sender": "amelia.evans@example.com",
                  "recipient": "jaxon.martin@example.com",
                  "subject": "Project Deadline Extension",
                  "body": "Hi Jaxon, Due to unforeseen circumstances, we've decided to extend the project deadline. Please adjust your schedule accordingly.",
                  "timestamp": "2023-10-29T10:10:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Amelia Evans",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 189,
                  "sender": "carter.jones@example.com",
                  "recipient": "emma.smith@example.com",
                  "subject": "Upcoming Team Building Event",
                  "body": "Hi Emma, We have an exciting team-building event planned. Get ready for a day of fun and collaboration!",
                  "timestamp": "2023-10-28T12:40:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Carter Jones",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 190,
                  "sender": "madison.wilson@example.com",
                  "recipient": "liam.white@example.com",
                  "subject": "Project Status Report",
                  "body": "Hi Liam, Attached is the latest project status report. Please review and provide your feedback.",
                  "timestamp": "2023-10-27T16:00:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Madison Wilson",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 191,
                  "sender": "oliver.anderson@example.com",
                  "recipient": "abigail.smith@example.com",
                  "subject": "Job Promotion Announcement",
                  "body": "Hi Abigail, I'm pleased to announce your well-deserved promotion. Congratulations!",
                  "timestamp": "2023-10-26T10:30:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Oliver Anderson",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 192,
                  "sender": "harper.martin@example.com",
                  "recipient": "aiden.jones@example.com",
                  "subject": "Invitation to Industry Conference",
                  "body": "Hi Aiden, You're invited to represent our company at the upcoming industry conference. Please confirm your attendance.",
                  "timestamp": "2023-10-25T13:45:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Harper Martin",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 193,
                  "sender": "joseph.ward@example.com",
                  "recipient": "mia.carter@example.com",
                  "subject": "New Partnership Proposal",
                  "body": "Hi Mia, I'm reaching out to discuss a potential partnership between our organizations. Let's schedule a meeting.",
                  "timestamp": "2023-10-24T09:15:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Joseph Ward",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 194,
                  "sender": "lily.rogers@example.com",
                  "recipient": "sebastian.brown@example.com",
                  "subject": "Team Milestone Celebration",
                  "body": "Hi Sebastian, Let's celebrate the recent team milestone. Your contributions have been crucial to our success.",
                  "timestamp": "2023-10-23T17:00:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Lily Rogers",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 195,
                  "sender": "ryan.carter@example.com",
                  "recipient": "zoey.evans@example.com",
                  "subject": "Important Company Update",
                  "body": "Hi Zoey, I wanted to share an important update regarding changes in company policies. Please review the attached document.",
                  "timestamp": "2023-10-22T14:50:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Ryan Carter",
                  "security": "encrypted",
                  "starred": true
                },
                {
                  "id": 196,
                  "sender": "aubrey.white@example.com",
                  "recipient": "wyatt.jenkins@example.com",
                  "subject": "Recognition for Outstanding Performance",
                  "body": "Hi Wyatt, Your outstanding performance has not gone unnoticed. Congratulations on the well-deserved recognition!",
                  "timestamp": "2023-10-21T11:25:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Aubrey White",
                  "security": "encrypted",
                  "starred": false
                },
                {
                  "id": 197,
                  "sender": "piper.martin@example.com",
                  "recipient": "brandon.jones@example.com",
                  "subject": "Request for Proposal Submission",
                  "body": "Hi Brandon, We invite you to submit a proposal for the upcoming project. Please adhere to the submission guidelines.",
                  "timestamp": "2023-10-20T09:40:00",
                  "mailed_by": "smtp.example.com",
                  "signed_by": "Piper Martin",
                  "security": "encrypted",
                  "starred": true
                }
              ]
,
  selectedEmail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAILS':
      return { ...state, emails: action.payload };
    case 'SELECT_EMAIL':
      return { ...state, selectedEmail: action.payload };
    case 'DELETE_EMAIL':
      return {
        ...state,
        emails: state.emails.filter((email) => email.id !== action.payload),
        selectedEmail: null,
      };
    case 'TOGGLE_READ_STATUS':
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.payload
            ? { ...email, read: !email.read }
            : email
        ),
      };
    case 'TOGGLE_STAR':
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.payload
            ? { ...email, starred: !email.starred }
            : email
        ),
      };
    case 'TOGGLE_ARCHIVE_STATUS':
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.payload
            ? { ...email, archived: !email.archived }
            : email
        ),
      };
    case 'ADD_REACTION':
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.payload.emailId
            ? { ...email, reactions: [...email.reactions, action.payload.reaction] }
            : email
        ),
      };
    case 'SEARCH_EMAILS':
      
      return { ...state, emails: action.payload };
    case 'FILTER_EMAILS':
      return { ...state, emails: action.payload };
    case 'UPDATE_FROM_INDEXEDDB':
      return { ...state, emails: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

// Function to fetch data from IndexedDB and update the store
/*const fetchAndStoreFromIndexedDB = async () => {
  try {
    const storedEmails = await localforage.getItem('indexedDBEmails');
    store.dispatch({ type: 'UPDATE_FROM_INDEXEDDB', payload: storedEmails || [] });
    console.log('Data fetched from IndexedDB and stored in Redux store successfully.');
  } catch (error) {
    console.error('Error fetching and storing data from IndexedDB:', error);
  }
};
*/
// Set an interval to fetch and store emails from IndexedDB every 1 second
//setInterval(fetchAndStoreFromIndexedDB, 1000);

export default store;
