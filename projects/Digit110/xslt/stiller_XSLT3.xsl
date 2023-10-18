<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="3.0" xmlns="http://www.w3.org/1999/xhtml">

    <xsl:output method="xhtml" html-version="5" omit-xml-declaration="yes" include-content-type="no" indent="yes"/>

    <xsl:template match="skyrim">
        <head>
            <link rel="stylesheet" type="text/css" href="stiller_XSLT3.css"/>
        </head>
        <html>
            <body>
                <xsl:apply-templates select="cover, body"/>
            </body>   
        </html>
    </xsl:template>
    
    <!-- ws:11/12/22 - I understood that we were meant to focus on the body, but I didn't like to not include a title. Some of the individual xsl templates will be using the @select attribute to not affect the title.-->
    <xsl:template match="cover">
        <div class="title">
            <h1><xsl:apply-templates select="title"/></h1>
            <h2><xsl:apply-templates select="attribution"/></h2>
            <h4><xsl:apply-templates select="subtitle"/></h4>
        </div>
    </xsl:template>

    <xsl:template match="paragraph">
            <p><xsl:apply-templates/></p>
    </xsl:template>
    
    
    <xsl:template match="QuestEvent">
        <u><xsl:apply-templates/></u>
    </xsl:template>
    
    <xsl:template match="epithet">
        <em><xsl:apply-templates/></em>
    </xsl:template>
    
    
    
    <xsl:template match="QuestItem">
        <span class="qi"><xsl:apply-templates/></span>
    </xsl:template>
    
    <xsl:template match="character">
        <span class="char"><strong><xsl:apply-templates/></strong></span>
    </xsl:template>
    
    <xsl:template match="faction">
        <span class="fac"><xsl:apply-templates/></span>  
    </xsl:template>
    
    <xsl:template match="location">
        <span class="loc"><strong><xsl:apply-templates/></strong></span>
    </xsl:template>
    
    
    
</xsl:stylesheet>
