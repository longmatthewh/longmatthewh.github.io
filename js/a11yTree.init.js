$('#code-example-real').html($('#simple-list-example').html());
$('#code-example-real').find('h3').attr('id', 'tree-label');
$('#code-example-real > ul').a11yTree({
    treeLabelId :'tree-label',
    toggleSelector : 'i.fa',
    treeItemLabelSelector : '.tree-item-label',
    onCollapse: function($item) {
        $item.children('.at-toggle').removeClass('fa-minus-square').addClass('fa-plus-square');
    },
    onExpand: function($item) {
        $item.children('.at-toggle').removeClass('fa-plus-square').addClass('fa-minus-square');
    }
});