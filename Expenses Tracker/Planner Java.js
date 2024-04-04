$(document).ready(function () {
	// variablen
	var error = "Please type something in the input field in order to add it to your list.";
	var noItems = "No entries found";
	var animTime = 301;

	// Load saved to-do list items from localStorage
	var savedItems = JSON.parse(localStorage.getItem('toDoItems')) || [];

	// Function to update the UI with the current to-do list items
	function updateToDoList() {
			var toDoList = $("ol.to-do");
			toDoList.empty();

			if (savedItems.length === 0) {
					toDoList.append("<p>" + noItems + "</p>");
			} else {
					savedItems.forEach(function (item) {
							toDoList.append("<li>" + item + "<span class='delete'></span><span class='check'></span></li>");
					});
			}
	}

	// Initial update of the UI
	updateToDoList();

	// submit button > neuen eintrag hinzufügen
	$("input[type='submit']").on("click", function () {
			var newText = $("input[type='text']").val();
			if (newText.length > 0) {
					savedItems.push(newText);
					localStorage.setItem('toDoItems', JSON.stringify(savedItems));
					updateToDoList();
					$("input[type='text']").val("");
			} else {
					alert(error);
			}
	});

	// .check button > element verschieben
	$(document).on("click", ".check", function () {
			var listItem = $(this).parent().text();
			savedItems = savedItems.filter(item => item !== listItem);
			localStorage.setItem('toDoItems', JSON.stringify(savedItems));
			updateToDoList();

			$(this).parent().fadeOut(animTime, function () {
					var checkedItem = $(this).fadeIn(animTime);
					$("ol.done").append(checkedItem);
			});
	});

	// .delete button > element entfernen
	$(document).on("click", ".delete", function () {
			var listItem = $(this).parent().text();
			savedItems = savedItems.filter(item => item !== listItem);
			localStorage.setItem('toDoItems', JSON.stringify(savedItems));
			updateToDoList();

			$(this).parent().fadeOut(animTime);
	});
});

    // Dark mode toggle functionality
    document.getElementById('darkModeToggle').addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', this.checked);
    });
