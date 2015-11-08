Ext.data.JsonP.Autolinker_matchParser_MatchParser({"tagname":"class","name":"Autolinker.matchParser.MatchParser","autodetected":{},"files":[{"filename":"MatchParser.js","href":"MatchParser.html#Autolinker-matchParser-MatchParser"}],"private":true,"extends":null,"members":[{"name":"email","tagname":"cfg","owner":"Autolinker.matchParser.MatchParser","id":"cfg-email","meta":{}},{"name":"hashtag","tagname":"cfg","owner":"Autolinker.matchParser.MatchParser","id":"cfg-hashtag","meta":{}},{"name":"phone","tagname":"cfg","owner":"Autolinker.matchParser.MatchParser","id":"cfg-phone","meta":{}},{"name":"stripPrefix","tagname":"cfg","owner":"Autolinker.matchParser.MatchParser","id":"cfg-stripPrefix","meta":{}},{"name":"twitter","tagname":"cfg","owner":"Autolinker.matchParser.MatchParser","id":"cfg-twitter","meta":{}},{"name":"urls","tagname":"cfg","owner":"Autolinker.matchParser.MatchParser","id":"cfg-urls","meta":{}},{"name":"charBeforeProtocolRelMatchRegex","tagname":"property","owner":"Autolinker.matchParser.MatchParser","id":"property-charBeforeProtocolRelMatchRegex","meta":{"private":true}},{"name":"matchValidator","tagname":"property","owner":"Autolinker.matchParser.MatchParser","id":"property-matchValidator","meta":{"private":true}},{"name":"matcherRegex","tagname":"property","owner":"Autolinker.matchParser.MatchParser","id":"property-matcherRegex","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.matchParser.MatchParser","id":"method-constructor","meta":{}},{"name":"matchHasInvalidCharAfterTld","tagname":"method","owner":"Autolinker.matchParser.MatchParser","id":"method-matchHasInvalidCharAfterTld","meta":{"private":true}},{"name":"matchHasUnbalancedClosingParen","tagname":"method","owner":"Autolinker.matchParser.MatchParser","id":"method-matchHasUnbalancedClosingParen","meta":{"private":true}},{"name":"processCandidateMatch","tagname":"method","owner":"Autolinker.matchParser.MatchParser","id":"method-processCandidateMatch","meta":{"private":true}},{"name":"replace","tagname":"method","owner":"Autolinker.matchParser.MatchParser","id":"method-replace","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.matchParser.MatchParser","short_doc":"Used by Autolinker to parse potential matches, given an input string of text. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser' target='_blank'>MatchParser.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Used by Autolinker to parse potential matches, given an input string of text.</p>\n\n<p>The MatchParser is fed a non-HTML string in order to search for matches.\nAutolinker first uses the <a href=\"#!/api/Autolinker.htmlParser.HtmlParser\" rel=\"Autolinker.htmlParser.HtmlParser\" class=\"docClass\">Autolinker.htmlParser.HtmlParser</a> to \"walk\naround\" HTML tags, and then the text around the HTML tags is passed into the\nMatchParser in order to find the actual matches.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-email' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-cfg-email' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-cfg-email' class='name expandable'>email</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true if email addresses should be automatically linked, false if they should not be. ...</div><div class='long'><p><code>true</code> if email addresses should be automatically linked, <code>false</code> if they should not be.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-hashtag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-cfg-hashtag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-cfg-hashtag' class='name expandable'>hashtag</a> : Boolean/String<span class=\"signature\"></span></div><div class='description'><div class='short'>A string for the service name to have hashtags (ex: \"#myHashtag\")\nauto-linked to. ...</div><div class='long'><p>A string for the service name to have hashtags (ex: \"#myHashtag\")\nauto-linked to. The currently-supported values are:</p>\n\n<ul>\n<li>'twitter'</li>\n<li>'facebook'</li>\n<li>'instagram'</li>\n</ul>\n\n\n<p>Pass <code>false</code> to skip auto-linking of hashtags.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-phone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-cfg-phone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-cfg-phone' class='name expandable'>phone</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true if Phone numbers (\"(555)555-5555\") should be automatically linked, false if they should not be. ...</div><div class='long'><p><code>true</code> if Phone numbers (\"(555)555-5555\") should be automatically linked, <code>false</code> if they should not be.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-stripPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-cfg-stripPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-cfg-stripPrefix' class='name expandable'>stripPrefix</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true if 'http://' or 'https://' and/or the 'www.' should be stripped\nfrom the beginning of URL links' text, false oth...</div><div class='long'><p><code>true</code> if 'http://' or 'https://' and/or the 'www.' should be stripped\nfrom the beginning of URL links' text, <code>false</code> otherwise.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-twitter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-cfg-twitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-cfg-twitter' class='name expandable'>twitter</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true if Twitter handles (\"@example\") should be automatically linked, false if they should not be. ...</div><div class='long'><p><code>true</code> if Twitter handles (\"@example\") should be automatically linked, <code>false</code> if they should not be.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-urls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-cfg-urls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-cfg-urls' class='name expandable'>urls</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true if miscellaneous URLs should be automatically linked, false if they should not be. ...</div><div class='long'><p><code>true</code> if miscellaneous URLs should be automatically linked, <code>false</code> if they should not be.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-charBeforeProtocolRelMatchRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-property-charBeforeProtocolRelMatchRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-property-charBeforeProtocolRelMatchRegex' class='name expandable'>charBeforeProtocolRelMatchRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression used to retrieve the character before a\nprotocol-relative URL match. ...</div><div class='long'><p>The regular expression used to retrieve the character before a\nprotocol-relative URL match.</p>\n\n<p>This is used in conjunction with the <a href=\"#!/api/Autolinker.matchParser.MatchParser-property-matcherRegex\" rel=\"Autolinker.matchParser.MatchParser-property-matcherRegex\" class=\"docClass\">matcherRegex</a>, which needs\nto grab the character before a protocol-relative '//' due to the lack of\na negative look-behind in JavaScript regular expressions. The character\nbefore the match is stripped from the URL.</p>\n<p>Defaults to: <code>/^(.)?\\/\\//</code></p></div></div></div><div id='property-matchValidator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-property-matchValidator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-property-matchValidator' class='name expandable'>matchValidator</a> : <a href=\"#!/api/Autolinker.MatchValidator\" rel=\"Autolinker.MatchValidator\" class=\"docClass\">Autolinker.MatchValidator</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The MatchValidator object, used to filter out any false positives from\nthe matcherRegex. ...</div><div class='long'><p>The MatchValidator object, used to filter out any false positives from\nthe <a href=\"#!/api/Autolinker.matchParser.MatchParser-property-matcherRegex\" rel=\"Autolinker.matchParser.MatchParser-property-matcherRegex\" class=\"docClass\">matcherRegex</a>. See <a href=\"#!/api/Autolinker.MatchValidator\" rel=\"Autolinker.MatchValidator\" class=\"docClass\">Autolinker.MatchValidator</a> for details.</p>\n</div></div></div><div id='property-matcherRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-property-matcherRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-property-matcherRegex' class='name expandable'>matcherRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression that matches URLs, email addresses, phone #s,\nTwitter handles, and Hashtags. ...</div><div class='long'><p>The regular expression that matches URLs, email addresses, phone #s,\nTwitter handles, and Hashtags.</p>\n\n<p>This regular expression has the following capturing groups:</p>\n\n<ol>\n<li>Group that is used to determine if there is a Twitter handle match\n(i.e. \\@someTwitterUser). Simply check for its existence to determine\nif there is a Twitter handle match. The next couple of capturing\ngroups give information about the Twitter handle match.</li>\n<li>The whitespace character before the \\@sign in a Twitter handle. This\nis needed because there are no lookbehinds in JS regular expressions,\nand can be used to reconstruct the original string in a replace().</li>\n<li>The Twitter handle itself in a Twitter match. If the match is\n'@someTwitterUser', the handle is 'someTwitterUser'.</li>\n<li>Group that matches an email address. Used to determine if the match\nis an email address, as well as holding the full address. Ex:\n'me@my.com'</li>\n<li>Group that matches a URL in the input text. Ex: 'http://google.com',\n'www.google.com', or just 'google.com'. This also includes a path,\nurl parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&amp;q2=2#myAnchor</li>\n<li>Group that matches a protocol URL (i.e. 'http://google.com'). This is\nused to match protocol URLs with just a single word, like 'http://localhost',\nwhere we won't double check that the domain name has at least one '.'\nin it.</li>\n<li>A protocol-relative ('//') match for the case of a 'www.' prefixed\nURL. Will be an empty string if it is not a protocol-relative match.\nWe need to know the character before the '//' in order to determine\nif it is a valid match or the // was in a string we don't want to\nauto-link.</li>\n<li>A protocol-relative ('//') match for the case of a known TLD prefixed\nURL. Will be an empty string if it is not a protocol-relative match.\nSee #6 for more info.</li>\n<li>Group that is used to determine if there is a phone number match. The\nnext 3 groups give segments of the phone number.</li>\n<li>Group that is used to determine if there is a Hashtag match\n(i.e. #someHashtag). Simply check for its existence to determine if\nthere is a Hashtag match. The next couple of capturing groups give\ninformation about the Hashtag match.</li>\n<li>The whitespace character before the #sign in a Hashtag handle. This\nis needed because there are no look-behinds in JS regular\nexpressions, and can be used to reconstruct the original string in a\nreplace().</li>\n<li>The Hashtag itself in a Hashtag match. If the match is\n'#someHashtag', the hashtag is 'someHashtag'.</li>\n</ol>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.matchParser.MatchParser-method-constructor' class='name expandable'>Autolinker.matchParser.MatchParser</a>( <span class='pre'>[cfg]</span> ) : <a href=\"#!/api/Autolinker.matchParser.MatchParser\" rel=\"Autolinker.matchParser.MatchParser\" class=\"docClass\">Autolinker.matchParser.MatchParser</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object (optional)<div class='sub-desc'><p>The configuration options for the AnchorTagBuilder\ninstance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.matchParser.MatchParser\" rel=\"Autolinker.matchParser.MatchParser\" class=\"docClass\">Autolinker.matchParser.MatchParser</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-matchHasInvalidCharAfterTld' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-method-matchHasInvalidCharAfterTld' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-method-matchHasInvalidCharAfterTld' class='name expandable'>matchHasInvalidCharAfterTld</a>( <span class='pre'>urlMatch, protocolUrlMatch</span> ) : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determine if there's an invalid character after the TLD in a URL. ...</div><div class='long'><p>Determine if there's an invalid character after the TLD in a URL. Valid\ncharacters after TLD are ':/?#'. Exclude protocol matched URLs from this\ncheck.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlMatch</span> : String<div class='sub-desc'><p>The matched URL, if there was one. Will be an\n  empty string if the match is not a URL match.</p>\n</div></li><li><span class='pre'>protocolUrlMatch</span> : String<div class='sub-desc'><p>The match URL string for a protocol\n  match. Ex: 'http://yahoo.com'. This is used to match something like\n  'http://localhost', where we won't double check that the domain name\n  has at least one '.' in it.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the position where the invalid character was found. If\n  no such character was found, returns -1</p>\n</div></li></ul></div></div></div><div id='method-matchHasUnbalancedClosingParen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-method-matchHasUnbalancedClosingParen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-method-matchHasUnbalancedClosingParen' class='name expandable'>matchHasUnbalancedClosingParen</a>( <span class='pre'>matchStr</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determines if a match found has an unmatched closing parenthesis. ...</div><div class='long'><p>Determines if a match found has an unmatched closing parenthesis. If so,\nthis parenthesis will be removed from the match itself, and appended\nafter the generated anchor tag in <a href=\"#!/api/Autolinker.matchParser.MatchParser-method-processCandidateMatch\" rel=\"Autolinker.matchParser.MatchParser-method-processCandidateMatch\" class=\"docClass\">processCandidateMatch</a>.</p>\n\n<p>A match may have an extra closing parenthesis at the end of the match\nbecause the regular expression must include parenthesis for URLs such as\n\"wikipedia.com/something_(disambiguation)\", which should be auto-linked.</p>\n\n<p>However, an extra parenthesis <em>will</em> be included when the URL itself is\nwrapped in parenthesis, such as in the case of \"(wikipedia.com/something_(disambiguation))\".\nIn this case, the last closing parenthesis should <em>not</em> be part of the\nURL itself, and this method will return <code>true</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matchStr</span> : String<div class='sub-desc'><p>The full match string from the <a href=\"#!/api/Autolinker.matchParser.MatchParser-property-matcherRegex\" rel=\"Autolinker.matchParser.MatchParser-property-matcherRegex\" class=\"docClass\">matcherRegex</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if there is an unbalanced closing parenthesis at\n  the end of the <code>matchStr</code>, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-processCandidateMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-method-processCandidateMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-method-processCandidateMatch' class='name expandable'>processCandidateMatch</a>( <span class='pre'>matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch, phoneMatch, hashtagMatch, hashtagPrefixWhitespaceChar, hashtag</span> ) : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Processes a candidate match from the matcherRegex. ...</div><div class='long'><p>Processes a candidate match from the <a href=\"#!/api/Autolinker.matchParser.MatchParser-property-matcherRegex\" rel=\"Autolinker.matchParser.MatchParser-property-matcherRegex\" class=\"docClass\">matcherRegex</a>.</p>\n\n<p>Not all matches found by the regex are actual URL/Email/Phone/Twitter/Hashtag\nmatches, as determined by the <a href=\"#!/api/Autolinker.matchParser.MatchParser-property-matchValidator\" rel=\"Autolinker.matchParser.MatchParser-property-matchValidator\" class=\"docClass\">matchValidator</a>. In this case, the\nmethod returns <code>null</code>. Otherwise, a valid Object with <code>prefixStr</code>,\n<code>match</code>, and <code>suffixStr</code> is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matchStr</span> : String<div class='sub-desc'><p>The full match that was found by the\n  <a href=\"#!/api/Autolinker.matchParser.MatchParser-property-matcherRegex\" rel=\"Autolinker.matchParser.MatchParser-property-matcherRegex\" class=\"docClass\">matcherRegex</a>.</p>\n</div></li><li><span class='pre'>twitterMatch</span> : String<div class='sub-desc'><p>The matched text of a Twitter handle, if the\n  match is a Twitter match.</p>\n</div></li><li><span class='pre'>twitterHandlePrefixWhitespaceChar</span> : String<div class='sub-desc'><p>The whitespace char\n  before the  sign in a Twitter handle match. This is needed because of\n  no lookbehinds in JS regexes, and is need to re-include the character\n  for the anchor tag replacement.</p>\n</div></li><li><span class='pre'>twitterHandle</span> : String<div class='sub-desc'><p>The actual Twitter user (i.e the word after\n  the  sign in a Twitter match).</p>\n</div></li><li><span class='pre'>emailAddressMatch</span> : String<div class='sub-desc'><p>The matched email address for an email\n  address match.</p>\n</div></li><li><span class='pre'>urlMatch</span> : String<div class='sub-desc'><p>The matched URL string for a URL match.</p>\n</div></li><li><span class='pre'>protocolUrlMatch</span> : String<div class='sub-desc'><p>The match URL string for a protocol\n  match. Ex: 'http://yahoo.com'. This is used to match something like\n  'http://localhost', where we won't double check that the domain name\n  has at least one '.' in it.</p>\n</div></li><li><span class='pre'>wwwProtocolRelativeMatch</span> : String<div class='sub-desc'><p>The '//' for a protocol-relative\n  match from a 'www' url, with the character that comes before the '//'.</p>\n</div></li><li><span class='pre'>tldProtocolRelativeMatch</span> : String<div class='sub-desc'><p>The '//' for a protocol-relative\n  match from a TLD (top level domain) match, with the character that\n  comes before the '//'.</p>\n</div></li><li><span class='pre'>phoneMatch</span> : String<div class='sub-desc'><p>The matched text of a phone number</p>\n</div></li><li><span class='pre'>hashtagMatch</span> : String<div class='sub-desc'><p>The matched text of a Twitter\n  Hashtag, if the match is a Hashtag match.</p>\n</div></li><li><span class='pre'>hashtagPrefixWhitespaceChar</span> : String<div class='sub-desc'><p>The whitespace char\n  before the # sign in a Hashtag match. This is needed because of no\n  lookbehinds in JS regexes, and is need to re-include the character for\n  the anchor tag replacement.</p>\n</div></li><li><span class='pre'>hashtag</span> : String<div class='sub-desc'><p>The actual Hashtag (i.e the word\n  after the # sign in a Hashtag match).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A \"match description object\". This will be <code>null</code> if the\n  match was invalid, or if a match type is disabled. Otherwise, this will\n  be an Object (map) with the following properties:</p>\n<ul><li><span class='pre'>prefixStr</span> : String<div class='sub-desc'><p>The char(s) that should be prepended to\n  the replacement string. These are char(s) that were needed to be\n  included from the regex match that were ignored by processing code, and\n  should be re-inserted into the replacement stream.</p>\n</div></li><li><span class='pre'>suffixStr</span> : String<div class='sub-desc'><p>The char(s) that should be appended to\n  the replacement string. These are char(s) that were needed to be\n  included from the regex match that were ignored by processing code, and\n  should be re-inserted into the replacement stream.</p>\n</div></li><li><span class='pre'>match</span> : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a><div class='sub-desc'><p>The Match object that\n  represents the match that was found.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-replace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matchParser.MatchParser'>Autolinker.matchParser.MatchParser</span><br/><a href='source/MatchParser.html#Autolinker-matchParser-MatchParser-method-replace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matchParser.MatchParser-method-replace' class='name expandable'>replace</a>( <span class='pre'>text, replaceFn, [contextObj]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Parses the input text to search for matches, and calls the replaceFn\nto allow replacements of the matches. ...</div><div class='long'><p>Parses the input <code>text</code> to search for matches, and calls the <code>replaceFn</code>\nto allow replacements of the matches. Returns the <code>text</code> with matches\nreplaced.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text to search and repace matches in.</p>\n</div></li><li><span class='pre'>replaceFn</span> : Function<div class='sub-desc'><p>The iterator function to handle the\n  replacements. The function takes a single argument, a <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>\n  object, and should return the text that should make the replacement.</p>\n</div></li><li><span class='pre'>contextObj</span> : Object (optional)<div class='sub-desc'><p>The context object (\"scope\") to run\n  the <code>replaceFn</code> in.</p>\n<p>Defaults to: <code>window</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});