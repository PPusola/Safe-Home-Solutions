#import <AppKit/AppKit.h>

int main(int argc, const char *argv[]) {
    @autoreleasepool {
        if (argc != 3) {
            fprintf(stderr, "Usage: html-to-pdf INPUT.html OUTPUT.pdf\n");
            return 1;
        }

        [NSApplication sharedApplication];

        NSString *inputPath = [[NSString stringWithUTF8String:argv[1]] stringByStandardizingPath];
        NSString *outputPath = [[NSString stringWithUTF8String:argv[2]] stringByStandardizingPath];
        if (![inputPath isAbsolutePath]) {
            inputPath = [[[NSFileManager defaultManager] currentDirectoryPath]
                stringByAppendingPathComponent:inputPath];
        }
        if (![outputPath isAbsolutePath]) {
            outputPath = [[[NSFileManager defaultManager] currentDirectoryPath]
                stringByAppendingPathComponent:outputPath];
        }
        NSData *htmlData = [NSData dataWithContentsOfFile:inputPath];
        if (!htmlData) {
            fprintf(stderr, "Unable to read HTML input.\n");
            return 1;
        }

        NSDictionary *options = @{
            NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType,
            NSCharacterEncodingDocumentAttribute: @(NSUTF8StringEncoding),
            NSBaseURLDocumentOption: [NSURL fileURLWithPath:[inputPath stringByDeletingLastPathComponent]]
        };

        NSError *error = nil;
        NSAttributedString *content = [[NSAttributedString alloc]
            initWithData:htmlData
            options:options
            documentAttributes:nil
            error:&error];

        if (!content) {
            fprintf(stderr, "Unable to parse HTML: %s\n", error.localizedDescription.UTF8String);
            return 1;
        }

        CGFloat pageWidth = 612.0;
        CGFloat pageHeight = 792.0;
        CGFloat horizontalMargin = 42.0;
        CGFloat verticalMargin = 42.0;
        CGFloat contentWidth = pageWidth - (horizontalMargin * 2.0);

        NSTextView *textView = [[NSTextView alloc] initWithFrame:NSMakeRect(
            0,
            0,
            contentWidth,
            pageHeight - (verticalMargin * 2.0)
        )];
        textView.verticallyResizable = YES;
        textView.horizontallyResizable = NO;
        textView.textContainer.containerSize = NSMakeSize(contentWidth, CGFLOAT_MAX);
        textView.textContainer.widthTracksTextView = YES;
        [textView.textStorage setAttributedString:content];
        [textView.layoutManager ensureLayoutForTextContainer:textView.textContainer];

        NSRect usedRect = [textView.layoutManager usedRectForTextContainer:textView.textContainer];
        textView.frame = NSMakeRect(
            0,
            0,
            contentWidth,
            MAX(usedRect.size.height, pageHeight - (verticalMargin * 2.0))
        );

        NSPrintInfo *printInfo = [[NSPrintInfo alloc] init];
        printInfo.paperSize = NSMakeSize(pageWidth, pageHeight);
        printInfo.topMargin = verticalMargin;
        printInfo.bottomMargin = verticalMargin;
        printInfo.leftMargin = horizontalMargin;
        printInfo.rightMargin = horizontalMargin;
        printInfo.horizontalPagination = NSFitPagination;
        printInfo.verticalPagination = NSAutoPagination;
        printInfo.verticallyCentered = NO;
        printInfo.horizontallyCentered = NO;
        printInfo.jobDisposition = NSPrintSaveJob;
        printInfo.dictionary[NSPrintJobSavingURL] = [NSURL fileURLWithPath:outputPath];

        NSPrintOperation *operation = [NSPrintOperation printOperationWithView:textView printInfo:printInfo];
        operation.showsPrintPanel = NO;
        operation.showsProgressPanel = NO;

        if (![operation runOperation]) {
            fprintf(stderr, "PDF rendering failed.\n");
            return 1;
        }
    }

    return 0;
}
