define`
  <tram-mirror>
    <input size="10" disabled>
		<input size="10" onkeyup="setMirrorValue(event)">
  </tram-mirror>
`;

function setMirrorValue(event) {
	const reflectionInput = event.target.previousElementSibling;
	reflectionInput.value = event.target.value;
}
