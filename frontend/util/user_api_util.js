export const fetchUserBy = (userParams, limit) =>
  $.ajax({
    url: "/api/users",
    method: "get",
    data: { userParams, limit }
  });

export const fetchUser = id =>
  $.ajax({
    url: `/api/users/${id}`,
    method: "get"
  });

export const createUser = user =>
  $.ajax({
    url: "/api/users",
    method: "post",
    data: { user }
  });

export const updateUser = user =>
  $.ajax({
    url: `/api/users/${user.id}`,
    method: "patch",
    data: { user }
  });

export const deleteUser = id =>
  $.ajax({
    url: `/api/users/${id}`,
    method: "delete",
    data: { id }
  });
