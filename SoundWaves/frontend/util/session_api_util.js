export const beginSession = userParams => (
  $.ajax({
    url: '/api/session',
    method: 'post',
    data: { user: userParams }
  })
);

export const endSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'delete'
  })
);
