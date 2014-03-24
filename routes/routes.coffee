module.exports = (route,di)->

  route.get "",
    as: "home"
    uses: "home@index"

  route.get "salam", (req, res)->
    res.send('salam')

  route.get 'recent',
    as: "recentPosts"
    uses: "home@recentPosts"

  route.get "form",
    as: "form"
    uses: "home@form"

  route.post "save-post",
    as: "savePost"
    uses: "home@savePost"

  route.get "test",
    as:"test"
    uses:(req,res)-> res.send "this is test"

  route.group
    prefix:"admin"
    filters:["auth"]
    routes:(route)->

      route.get "",
        as:"adminIndex"
        uses:(req,res)->res.send "admin route"

      route.get "/stat",
        as:"adminStat"
        uses:(req,res)->
          users = if req.session.users?
                    ++req.session.users
                  else
                    req.session.users = 0
                    req.session.users

          res.send "you visit this site #{users} time"

  true
