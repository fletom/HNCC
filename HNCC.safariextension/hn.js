(function() {
	$('.comhead').append('<span class="hncc-handle collapse">[-]</span>');
	$('.comhead').append('<span class="hncc-handle expand">[+]</span>');

	$(document).on('click', '.hncc-handle', function() {
		var collapse_or_expand = $(this).is('.collapse');
		var $row = $(this).closest('table').closest('tr');
		var this_width = $row.find('img[src="s.gif"]').width();

		$row.toggleClass('hncc-collapsed', collapse_or_expand);
		$row.nextAll().each(function() {
			var child_width = $(this).find('img[src="s.gif"]').width();
			if (child_width > this_width) {
				$(this).toggleClass('hncc-collapsed', collapse_or_expand);
			}
			else {
				return false;
			}
		});
	})
})();