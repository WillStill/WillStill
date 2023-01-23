<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://www.w3.org/1999/xhtml" version="3.0">

    <xsl:output method="xhtml" html-version="5" omit-xml-declaration="yes" include-content-type="no" indent="yes"/>

    <xsl:variable name="travelColl" as="document-node()+" select="collection('xml-letters/?select=*.xml')"/>
    <!-- Global Variable -->

    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title><xsl:value-of select="//docTitle"/></title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" type="text/css" href="../style.css"/>
            </head>
            <body>
                <!--<h1 class="Title">The Founding of Penn State Behrend</h1>
                <nav>
                    <a href="../index.html">Home</a>
                    <a href="../analysis.html">Analysis</a>
                    <a href="../gallery.html">Gallery</a>
                    <a href="../about.html">About the Team</a>
                </nav>
                -->
                <section id="contain">
                    <h2>Contents</h2>
                    <table>
                        <tr>
                            <th>Letter Date</th>
                            <th>People Mentioned</th>
                            <th>Places Mentioned</th>
                        </tr>
                        <xsl:apply-templates select="$travelColl//letter" mode="toc"/>

                    </table>
                </section>

                <section id="fulltext">
                    <xsl:apply-templates select="$travelColl//letter"/>
                </section>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="letter" mode="toc">
        <tr>
            <td><a href="#{@xml:id}"><!-- This is the internal link --><xsl:apply-templates select="@xml:id"/></a>: <xsl:value-of select=".//p[1] ! substring(., 1, 80)"/>
            </td>
            <td>
                <xsl:value-of select="descendant::placeName ! normalize-space() => distinct-values() => sort() => string-join(', ')"/>
            </td>
            <td>
                <xsl:value-of select="descendant::persName ! normalize-space() => distinct-values() => sort() => string-join(', ')"/>
            </td>

        </tr>
    </xsl:template>
    <xsl:template match="letter">
        <div id="{@xml:id}">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="date | time">
        <span class="lime">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    <xsl:template match="placeName | transport">
        <span class="aqua">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    <xsl:template match="persName">
        <span class="persName">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    <xsl:template match="hand">
        <span class="hand">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    <xsl:template match="misspelling | x">
        <span class="x">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
</xsl:stylesheet>
