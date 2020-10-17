export const getNextId = (id, size) => {
	if (id + 1 === size) return (id + 1) % size;
	else return id + 1;
};

export const getPrevId = (id, size) => {
	if (id === 0) return size - 1;
	else return id - 1;
};
