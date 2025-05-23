# Unit-6-Capstone


        <div class="button-wrapper">
            <!-- Task 5: Add a form to update the student's grade -->
            <!-- Make sure the new grade is a number from 0 to 100 -->
            <!-- Go to script.js to complete Task 6 -->
             <div class="card">
              <form onsubmit="editStudent(event, '<%= students[i].id %>')">
                <input name="name" value="<%= students[i].name %>" />
                <input name="grade" type="number" min="0" max="100" value="<%= students[i].grade %>" />
                <button type="submit">Update</button>
              </form>
             </div>

            <!-- Task 2: Add a button to delete the entire student by ID -->
             <button onclick="deleteStudent('<%=students[i].id %>')">Delete</button>
            <!-- Go to script.js to complete Task 3 -->
            
        </div>
