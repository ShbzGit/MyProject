document.getElementById('deliveryForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const pickupLocation = document.getElementById('pickupLocation').value;
  const dropLocation = document.getElementById('dropLocation').value;

  // Validate inputs
  if (!pickupLocation || !dropLocation) {
    alert('Please fill in both pickup and drop locations.');
    return;
  }

  // Show confirmation message
  document.getElementById('confirmationMessage').classList.remove('hidden');

  // Clear form fields
  document.getElementById('pickupLocation').value = '';
  document.getElementById('dropLocation').value = '';

  // Hide confirmation message after 5 seconds
  setTimeout(() => {
    document.getElementById('confirmationMessage').classList.add('hidden');
  }, 5000);
});