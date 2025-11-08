// Array.from => which makes a new array
// Array.from({ length: N }, (_, i) => expression)
// এটা দুইটা জিনিস নেয়:
// একটা object যার মধ্যে length আছে (মানে কতগুলো এলিমেন্ট হবে)
// একটা callback function যা বলে দেয় প্রতিটা ইনডেক্সে কী মান বসবে।
// It needs in pagination

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(2, 11, 4));
