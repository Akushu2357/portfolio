export const email = 'tang.tang2004@gmail.com';
export function buildEmailDraft(name, message) {
  return (
    'mailto:' +
    email +
    '?subject=' +
    encodeURIComponent('Portfolio Contact: Message from ' + name.trim()) +
    '&body=' +
    encodeURIComponent(
      'Name: ' + name.trim() + '\r\n\r\nMessage:\r\n' + message,
    )
  );
}

export function openEmailDraft(name, message) {
  window.location.href = buildEmailDraft(name, message);
}
