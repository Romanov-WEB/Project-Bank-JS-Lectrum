export const occurrenceDay = (occurrence) => {
    return new Date(occurrence.created).setHours(0, 0, 0, 0);
};
