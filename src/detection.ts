function detection(val: string | number) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val.toFixed(3);
}

// Now these code you will write a lot in future.

function getId(id: string | null) {
  if (!id) {
    console.log("Database dont provided any id.");
    return;
  }

  return id.toUpperCase();
}
