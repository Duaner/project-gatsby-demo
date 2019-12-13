exports.linkResolver = function linkResolver(doc) {
  // Route for blog posts
  if (doc.type === "post") {
    return "/post/" + doc.uid
  }
  // Homepage route fallback
  return "/"
}