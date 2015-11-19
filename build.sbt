name := "UIredactor"

version := "1.0"

lazy val `uiredactor` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq( jdbc , anorm , cache , ws )

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

libraryDependencies ++= Seq(
  cache,
  ws,
  "org.webjars" %% "webjars-play" % "2.3.0-3",
  "org.webjars.bower" % "angular" % "1.4.7",
  "org.webjars" % "jquery" % "2.1.1",
  "org.webjars" % "bootstrap" % "3.2.0-2",
  "org.webjars.bower" % "angular-route" % "1.4.7"
)
