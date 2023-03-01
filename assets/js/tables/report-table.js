$(document).ready(function() {
  $('#tablereport').DataTable({
    dom: 'iBfrtp<"bottom"l>',
    buttons: [
      'excel', 'print'
    ],
    searching: false,
  });
});