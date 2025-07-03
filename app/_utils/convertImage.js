export function convertImage(image) {
	const bytes = new Uint8Array(image);
	const binaryString = String.fromCharCode(...bytes);
	return `data:image/jpeg;base64,${btoa(binaryString)}`;
}
