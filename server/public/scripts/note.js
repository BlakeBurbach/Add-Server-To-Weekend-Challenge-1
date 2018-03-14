
// when starting a project and there are no files provided - create a new repo
// with a README.md and clone the original repo's url
//
// after cloning and creating a git repo - create your files in that new git repo
// folder. Open everything in atom.
//
// First thing you should do is go into the README and create a to-do list
//
// TO-DO list can look like this
// - [] Get files set up (HTML, JS, CSS)
// - [] Create a single input and log to the console - one input at a time
//      so it's easier to debug instead of several things at once.
// - [] Calculate salary based on the input
// - [] Append to the DOM
//
// create a variable tr = $( '<tr></tr>' );
//   - this creates a variable that will create a table row
//   - you can then append td elements to that tr variable
//   - then append that tr variable to the table. SUPER SLICK
//
//        i.e. let tr = $( '<tr></tr>' );
//              tr.append( first );
//              tr.append( last );
//              etc.
//
//              $('#tableContent').append(tr);
//
// When creating a class, you want it to be able to transfer to other
// languages without having to use jQuery.
// So in your class you could create a method that creates a table row
// with raw html.
//            i.e. toHTML(){
//                       let result = '<tr>'; // creates a table row
//                        result += '<td>' + first + '</td>'; // creates td inside row
//                        result += '</tr>';
//                        return result;
//                   }
//
//  So later after you create a class you can append this straight to the table
//  by calling it. i.e. $( '#tableContent' ).append( employee.toHTML() );
//
// - [] Add remaining fields
// - [] Create our HTML table and append to that
// - [] toggle the total (background) based on total salary
// - [] add a delete button
// - [] added a class or two in javascript
// - [] additional styling
//
//
// .val() will ALWAYS output a string regardless of the input type
// .text <div>Hello Hadar</div>
// .html <div><span>Hello</span></div>
// .append <div><span>Hello></span>Hadar</div>
//
// - [] update total after delete
//
//
//function calculateTotalEmployeeSalary( salary ){
//        totalEmployeeSalary = 0;
//        $('#tableContent').empty();
  // add new employee salary to the total employee salary
  // for (let employee of employeeArray ){
//  totalEmployeeSalary += employee.salary;
// }
//  console.log( 'Total Employee Salary: $', Number(totalEmployeeSalary) );
//  // activate the calculate of monthly cost
//  updateMonthlyCost( totalEmployeeSalary );
  // return totalEmployeeSalary;
//} // end calculateTotalEmployeeSalary
//
//
//
//
//   in the readynow function just call event handlers that will reference functions
// outside of the readynow that will activate once that event has happened
// then outside of the readynow is when you call the functions and say what
// it does instead of calling the function inside of the readynow and then putting the
// event handler inside of the function outside of the readynow
