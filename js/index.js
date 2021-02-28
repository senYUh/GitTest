<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Jquery实现复选框全选</title>
				<script type="text/javascript" src="Jquery-3.5.1.js"></script>
				<script type="text/javascript">
					function SelectAll(){
						var flag=$("#AllBut").prop("checked");
						$(".ah").prop("checked",flag);
					}
				</script>
	</head>
	<body>

		<input type="checkbox" id="AllBut" onclick="SelectAll();"/>全选
		<br />
		<input type="checkbox" class="ah"/>吃
		<input type="checkbox" class="ah"/>喝
		<input type="checkbox" class="ah"/>嫖
	</body>
</html>
