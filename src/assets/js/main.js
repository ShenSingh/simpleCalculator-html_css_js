 $(document).ready(function() {
            let expression = '';  // Holds the mathematical expression
            let resultDisplayed = false;

            // Update the output display
            function updateOutput() {
                $('#output').text(expression);
                if (expression === '') {
                    $('.result-text').text('0');
                }
            }

            // Handling number and operator buttons
            $('.btn').not('.control, .cal-btn').click(function() {
                let value = $(this).text();
                if (resultDisplayed && !isNaN(value)) {
                    expression = ''; // Clear expression if result was displayed and a number is pressed
                }
                resultDisplayed = false;
                expression += value;
                updateOutput();
            });

            // Handling operator buttons (+, -, *, /)
            $('.cal-btn').not(':contains("=")').click(function() {
                let operator = $(this).text();
                expression += operator;
                resultDisplayed = false;
                updateOutput();
            });

            // Handling equals button
            $('.cal-btn:contains("=")').click(function() {
                try {
                    let result = eval(expression);  // Calculate the result
                    $('.result-text').text(result);
                    expression = result.toString();
                    resultDisplayed = true;  // Flag that result is displayed
                } catch (error) {
                    $('.result-text').text('Error');
                }
            });

            // Handling AC button (All Clear)
            $('.btn.control:contains("AC")').click(function() {
                expression = '';
                resultDisplayed = false;
                updateOutput();
            });

            // Handling +/- button (Negate)
            $('.btn.control:contains("+/-")').click(function() {
                if (expression !== '') {
                    let value = parseFloat(expression) * -1;
                    expression = value.toString();
                    updateOutput();
                }
            });

            // Handling % button (Percentage)
            $('.btn.control:contains("%")').click(function() {
                if (expression !== '') {
                    let value = parseFloat(expression) / 100;
                    expression = value.toString();
                    updateOutput();
                }
            });
        });