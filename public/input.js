
let inputCount = 1;
function addInputRect() {
  const constainer = document.getElementById('input-rectangles');
  const newDiv = document.createElement('div');
  newDiv.classList.add('input-rectangles');
  newDiv.innerHTML = `

          <label for="input-x-${inputCount}"></label>
          <input placeholder="X" id=""input-x-${inputCount}"" name="input[${inputCount}][x]" type="number" maxlength="2" required>


          <label for="input-y-${inputCount}"></label>
          <input placeholder="Y" id=""input-y-${inputCount}"" name="input[${inputCount}][y]" type="number" maxlength="2" required>


          <label for="input-width-${inputCount}"></label>
          <input placeholder="W" id=""input-width-${inputCount}"" name="input[${inputCount}][width]" type="number" maxlength="2" required>

          <label for="input-height-${inputCount}"></label>
          <input placeholder="H" id=""input-height-${inputCount}"" name="input[${inputCount}][height]" type="number" maxlength="2" required>

  `;
  constainer.appendChild(newDiv);
  inputCount++;

};