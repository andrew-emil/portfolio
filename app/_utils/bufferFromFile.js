export async function bufferFromFile(file) {
	if (!file) return null;
	const arrayBuffer = await file.arrayBuffer();
	// Convert to Uint8Array first, then to Buffer
	return Buffer.from(new Uint8Array(arrayBuffer));
}