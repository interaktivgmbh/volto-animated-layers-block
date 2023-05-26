window.onload = function () {
  // Get the checkbox elements
  const checkboxes = document.getElementsByClassName('layer-selector');

  // Function to show/hide layers with animation
  function animateLayerVisibility(layerId, show) {
    const layer = document.querySelector(`.layer[data-layer="${layerId}"]`);
    layer.style.opacity = show ? '1' : '0';
    layer.style.pointerEvents = show ? 'auto' : 'none';
  }

  // Iterate over each checkbox
  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    const layerId = checkbox.getAttribute('data-layer');

    // Add event listener for checkbox click
    checkbox.addEventListener('click', function () {
      animateLayerVisibility(layerId, checkbox.checked);
    });

    // Show/hide layers based on initial checkbox state
    animateLayerVisibility(layerId, checkbox.checked);
  }
};
