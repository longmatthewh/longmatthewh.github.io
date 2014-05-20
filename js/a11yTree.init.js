$('#code-example-real').html($('#simple-list-example').html());
$('#code-example-real').find(' > ul').attr('id', 'example-tree');
$('#code-example-real').find('h3').attr('id', 'tree-label');
$('#code-example-real > ul').a11yTree({
    treeLabelId :'tree-label',
    toggleSelector : 'i.fa',
    treeItemLabelSelector : '.tree-item-label',
    onCollapse: function($item, event) {
        $item.children('.at-toggle').removeClass('fa-minus-square').addClass('fa-plus-square');
        if (event) {
            ga('send', 'event', 'Toggle', 'Collapse');
        }
    },
    onExpand: function($item, event) {
        $item.children('.at-toggle').removeClass('fa-plus-square').addClass('fa-minus-square');
        if (event) {
            ga('send', 'event', 'Toggle', 'Expand');
        }
    }
});

$('#other-code-example-real > ul').a11yTree({
    treeLabelId :'other-tree-label',
    toggleSelector : 'i.fa',
    treeItemLabelSelector : '.tree-item-label',
    onCollapse: function($item, event) {
        $item.children('.at-toggle').removeClass('fa-caret-square-o-up').addClass('fa-caret-square-o-down');
        if (event) {
            ga('send', 'event', 'Toggle', 'Collapse');
        }
    },
    onExpand: function($item, event) {
        $item.children('.at-toggle').removeClass('fa-caret-square-o-down').addClass('fa-caret-square-o-up');
        if (event) {
            ga('send', 'event', 'Toggle', 'Expand');
        }
    }
});
