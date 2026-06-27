#import <AppKit/AppKit.h>
#import <PDFKit/PDFKit.h>

int main(int argc, const char *argv[]) {
    @autoreleasepool {
        if (argc != 4) {
            fprintf(stderr, "Usage: pdf-page-preview INPUT.pdf PAGE_INDEX OUTPUT.png\n");
            return 1;
        }

        NSString *inputPath = [[NSString stringWithUTF8String:argv[1]] stringByStandardizingPath];
        NSInteger pageIndex = [[NSString stringWithUTF8String:argv[2]] integerValue];
        NSString *outputPath = [[NSString stringWithUTF8String:argv[3]] stringByStandardizingPath];
        PDFDocument *document = [[PDFDocument alloc] initWithURL:[NSURL fileURLWithPath:inputPath]];

        if (!document || pageIndex < 0 || pageIndex >= document.pageCount) {
            fprintf(stderr, "Invalid PDF or page index.\n");
            return 1;
        }

        PDFPage *page = [document pageAtIndex:pageIndex];
        NSRect bounds = [page boundsForBox:kPDFDisplayBoxMediaBox];
        CGFloat scale = 2.0;
        NSSize size = NSMakeSize(bounds.size.width * scale, bounds.size.height * scale);
        NSImage *image = [[NSImage alloc] initWithSize:size];

        [image lockFocus];
        [[NSColor whiteColor] setFill];
        NSRectFill(NSMakeRect(0, 0, size.width, size.height));
        NSAffineTransform *transform = [NSAffineTransform transform];
        [transform scaleBy:scale];
        [transform concat];
        [page drawWithBox:kPDFDisplayBoxMediaBox toContext:NSGraphicsContext.currentContext.CGContext];
        [image unlockFocus];

        CGImageRef cgImage = [image CGImageForProposedRect:nil context:nil hints:nil];
        NSBitmapImageRep *bitmap = [[NSBitmapImageRep alloc] initWithCGImage:cgImage];
        NSData *png = [bitmap representationUsingType:NSBitmapImageFileTypePNG properties:@{}];

        if (![png writeToFile:outputPath atomically:YES]) {
            fprintf(stderr, "Unable to write PNG.\n");
            return 1;
        }
    }

    return 0;
}
