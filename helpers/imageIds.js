/**
 * Function to return the next id
 * Returns 1st id if current is last
 */
export const getNextId = (id, size) => {
	if (id + 1 === size) return (id + 1) % size;
	else return id + 1;
};

/**
 * Function to return the previous id
 * Returns last id if current is 1st
 */
export const getPrevId = (id, size) => {
	if (id === 0) return size - 1;
	else return id - 1;
};
