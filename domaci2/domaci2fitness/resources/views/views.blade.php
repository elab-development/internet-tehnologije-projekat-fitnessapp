<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workouts</title>
    <style>
        #emp{
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        #emp td,#emp th{
            border: 1px solid black;
            padding: 8px;
        }
        #emp tr:nth-child(even){
            background-color: turquoise;
        }
        #emp th{
            padding-top:12px ;
            padding-bottom: 12px;
            text-align: left;
            background-color: green;
            color: white;
        }
        #button{
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <table id="emp">
        <thead>
            <tr>
                <th>ID</th>
                <th>Duration</th>
                <th>Description</th>
                <th>User</th>
                <th>Trainer</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            @foreach($workout as $w)
                <tr>
                    <td>{{$w->id}}</td>
                    <td>{{$w->duration}}</td>
                    <td>{{$w->description}}</td>
                    <td>{{$w->user_id}}</td>
                    <td>{{$w->trainer_id}}</td>
                    <td>{{$w->type_id}}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
   
   
   
</body>
</html>