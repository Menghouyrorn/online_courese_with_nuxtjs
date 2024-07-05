import courseData from "./courseData";

export const useCoures = () => {
  return {
    ...courseData,
    chapters: courseData.chapters.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        path:`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
      })),
    })),
  };
};
